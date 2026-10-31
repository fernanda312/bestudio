// BESTUDIO — ligação à base de dados, sem passo fingido.
// Quando js/config.js tem SUPABASE_URL + chave pública, conta, reservas,
// chat, serviços e definições vivem na base de dados. Quando não tem,
// tudo continua no navegador, exatamente como antes. Nunca se põe aqui
// uma chave secreta: só a chave pública que já está em js/config.js.
(function () {
  var cfg = window.BESTUDIO_CONFIG || {};
  var configured = !!(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY);
  var client = null;
  if (configured && window.supabase && window.supabase.createClient) {
    try { client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY); } catch (e) { client = null; }
  }
  var ready = false;
  var settingsCache = {};
  var servicesCache = null;
  var servicesFromRemote = false;

  function localSettings() {
    try { return JSON.parse(localStorage.getItem("bestudio_site_settings") || "{}"); } catch (e) { return {}; }
  }
  function saveLocalSettings() {
    try { localStorage.setItem("bestudio_site_settings", JSON.stringify(settingsCache)); } catch (e) {}
  }
  function getSetting(key, fallback) {
    if (settingsCache && settingsCache[key] !== undefined) return settingsCache[key];
    return fallback;
  }
  function feeValue() {
    var f = getSetting("fee", null);
    if (f && typeof f.value === "number") return f.value;
    if (typeof f === "number") return f;
    return null;
  }
  function whatsappValue() {
    var w = getSetting("whatsapp", null);
    if (w && w.url) return w.url;
    if (typeof w === "string") return w;
    return null;
  }

  async function loadRemote() {
    if (!client) { settingsCache = localSettings(); return; }
    try {
      var res = await client.from("site_settings").select("key, value");
      if (res.error) throw res.error;
      var out = {};
      (res.data || []).forEach(function (row) { out[row.key] = row.value; });
      settingsCache = out;
      var svc = out.services;
      if (Array.isArray(svc) && svc.length) { servicesCache = svc; servicesFromRemote = true; }
    } catch (e) {
      settingsCache = localSettings();
    }
  }
  var readyPromise = loadRemote().then(function () { ready = true; });

  function readyFn() { return readyPromise; }

  async function saveSetting(key, value) {
    if (!client) { settingsCache[key] = value; saveLocalSettings(); return; }
    var res = await client.from("site_settings").upsert({ key: key, value: value }, { onConflict: "key" });
    if (res.error) throw new Error(res.error.message || "Não consegui guardar. Verifica a ligação e tenta outra vez.");
    settingsCache[key] = value;
  }
  async function saveServices(list) {
    if (!client) {
      try { localStorage.setItem("bestudio_services_override", JSON.stringify(list)); } catch (e) {}
      servicesCache = list; servicesFromRemote = false;
      return;
    }
    await saveSetting("services", list);
    servicesCache = list; servicesFromRemote = true;
  }
  async function loadServices() {
    await readyPromise;
    if (servicesFromRemote) return servicesCache;
    return null;
  }

  function sessionId() {
    var id = null;
    try { id = localStorage.getItem("bestudio_session_id"); } catch (e) {}
    if (!id) {
      id = "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      try { localStorage.setItem("bestudio_session_id", id); } catch (e) {}
    }
    return id;
  }
  async function recordPageView(path) {
    var p = path || location.pathname.split("/").pop() || "index.html";
    if (!client) {
      try {
        var arr = JSON.parse(localStorage.getItem("bestudio_page_views_local") || "[]");
        arr.push({ path: p, at: new Date().toISOString() });
        localStorage.setItem("bestudio_page_views_local", JSON.stringify(arr.slice(-500)));
      } catch (e) {}
      return;
    }
    try { await client.from("page_views").insert({ path: p, session_id: sessionId() }); } catch (e) {}
  }
  async function visitorStats() {
    if (!client) {
      var counts = {};
      var recent = [];
      try {
        var arr = JSON.parse(localStorage.getItem("bestudio_page_views_local") || "[]");
        arr.forEach(function (v) { counts[v.path] = (counts[v.path] || 0) + 1; });
        recent = arr.slice(-20).reverse();
      } catch (e) {}
      return { counts: counts, recent: recent };
    }
    var res = await client.from("page_views").select("path, created_at").order("created_at", { ascending: false }).limit(500);
    if (res.error) throw new Error(res.error.message);
    var c = {};
    (res.data || []).forEach(function (v) { c[v.path] = (c[v.path] || 0) + 1; });
    return { counts: c, recent: (res.data || []).slice(0, 20) };
  }

  function sanitizeName(name) {
    return String(name || "ficheiro").toLowerCase().replace(/[^a-z0-9._-]+/g, "-").slice(0, 60) || "ficheiro";
  }
  async function uploadFile(file, folder, maxMB) {
    if (!file) throw new Error("Escolhe um ficheiro primeiro.");
    if (file.size > maxMB * 1024 * 1024) throw new Error("Ficheiro demasiado grande. Máximo " + maxMB + " MB.");
    if (!client) throw new Error("Ligação à base de dados indisponível. O ficheiro não foi guardado.");
    var path = folder + "/" + Date.now() + "-" + sanitizeName(file.name);
    var up = await client.storage.from("bestudio-media").upload(path, file, { upsert: false });
    if (up.error) throw new Error("Não consegui enviar o ficheiro. Verifica o balde bestudio-media e tenta outra vez. (" + up.error.message + ")");
    var pub = client.storage.from("bestudio-media").getPublicUrl(path);
    if (!pub.data || !pub.data.publicUrl) throw new Error("Ficheiro enviado, mas não consegui obter o endereço público.");
    return pub.data.publicUrl;
  }
  async function uploadMedia(file) { return uploadFile(file, "admin", 10); }
  async function uploadChatFile(file) { return uploadFile(file, "chat", 5); }

  async function sessionEmail() {
    if (!client) {
      var s = window.bestudio ? window.bestudio.session() : null;
      return s ? s.email : null;
    }
    var res = await client.auth.getSession();
    var user = res.data && res.data.session ? res.data.session.user : null;
    return user ? user.email : null;
  }
  async function register(email, pw) {
    if (!client) return window.bestudio.register(email, pw);
    var res = await client.auth.signUp({ email: email, password: pw });
    if (res.error) return { ok: false, err: res.error.message };
    if (window.bestudio) window.bestudio.setSession({ email: email });
    if (res.data && res.data.user) {
      try { await client.from("profiles").upsert({ id: res.data.user.id, email: email, is_admin: false }, { onConflict: "id" }); } catch (e) {}
    }
    return { ok: true };
  }
  async function login(email, pw) {
    if (!client) return window.bestudio.login(email, pw);
    var res = await client.auth.signInWithPassword({ email: email, password: pw });
    if (res.error) return { ok: false, err: res.error.message };
    if (window.bestudio) window.bestudio.setSession({ email: email });
    return { ok: true };
  }
  async function logout() {
    if (client) { try { await client.auth.signOut(); } catch (e) {} }
    if (window.bestudio) window.bestudio.logout();
  }
  async function isAdmin(email) {
    if (!email) return false;
    if (!client) return !!(window.bestudio && window.bestudio.adminEmail() && email === window.bestudio.adminEmail());
    var res = await client.from("profiles").select("is_admin").eq("email", email).maybeSingle();
    if (res.error || !res.data) return false;
    return res.data.is_admin === true;
  }

  function fromRemote(b) {
    return {
      id: b.id, service: b.service_id, serviceName: b.service_name, date: b.date, time: b.time,
      project: b.project || "", notes: b.notes || "", total: b.total_mt, fee: b.fee_mt,
      rest: (b.total_mt || 0) - (b.fee_mt || 0), email: b.email, status: b.status,
      payment_status: b.payment_status || "a aguardar", payment: b.payment_status || "a aguardar",
      created: b.created_at, provider_reference: b.provider_reference || ""
    };
  }
  function toRemote(b) {
    return {
      service_id: b.service, service_name: b.serviceName, date: b.date, time: b.time,
      project: b.project || "", notes: b.notes || "", total_mt: b.total, fee_mt: b.fee,
      status: b.status || "a aguardar pagamento", payment_status: b.payment_status || b.payment || "a aguardar",
      email: b.email
    };
  }
  async function listBookings() {
    if (!client) return window.bestudio.bookings();
    var res = await client.from("bookings").select("*").order("created_at", { ascending: false });
    if (res.error) throw new Error(res.error.message);
    return (res.data || []).map(fromRemote);
  }
  async function myBookings(email) {
    if (!client) return window.bestudio.myBookings();
    var res = await client.from("bookings").select("*").eq("email", email).order("created_at", { ascending: false });
    if (res.error) throw new Error(res.error.message);
    return (res.data || []).map(fromRemote);
  }
  async function addBooking(b) {
    if (!client) return window.bestudio.addBooking(b);
    var payload = toRemote(b);
    var sess = await client.auth.getSession();
    if (sess.data && sess.data.session && sess.data.session.user) payload.user_id = sess.data.session.user.id;
    var res = await client.from("bookings").insert(payload).select("*").single();
    if (res.error) throw new Error(res.error.message);
    return fromRemote(res.data);
  }
  async function updateBooking(id, patch) {
    if (!client) { window.bestudio.updateBooking(id, patch); return; }
    var remote = {};
    if (patch.status !== undefined) remote.status = patch.status;
    if (patch.payment_status !== undefined) remote.payment_status = patch.payment_status;
    if (patch.payment !== undefined) remote.payment_status = patch.payment;
    if (patch.status === "paga") remote.payment_status = "paga";
    var res = await client.from("bookings").update(remote).eq("id", id);
    if (res.error) throw new Error(res.error.message);
  }
  async function payFee(bookingId) {
    if (!client) throw new Error("Pagamento indisponível sem ligação à base de dados.");
    var res = await client.functions.invoke("create-payment", { body: { booking_id: bookingId } });
    if (res.error) throw new Error(res.error.message || "Não consegui iniciar o pagamento.");
    return res.data;
  }

  async function getConversation(email) {
    if (!client) return null;
    var res = await client.from("conversations").select("*").eq("email", email).maybeSingle();
    if (res.error) throw new Error(res.error.message);
    if (res.data) return res.data;
    var ins = await client.from("conversations").insert({ email: email }).select("*").single();
    if (ins.error) throw new Error(ins.error.message);
    return ins.data;
  }
  async function listConversations() {
    if (!client) {
      var seen = {};
      (window.bestudio.messages() || []).forEach(function (m) { if (m.email) seen[m.email] = true; if (m.to) seen[m.to] = true; });
      return Object.keys(seen).map(function (e) { return { email: e }; });
    }
    var res = await client.from("conversations").select("*").order("created_at", { ascending: false });
    if (res.error) throw new Error(res.error.message);
    return res.data || [];
  }
  async function conversationMessages(convId, email) {
    if (!client) {
      return (window.bestudio.messages() || []).filter(function (m) { return m.email === email || m.to === email; });
    }
    var res = await client.from("messages").select("*").eq("conversation_id", convId).order("created_at", { ascending: true });
    if (res.error) throw new Error(res.error.message);
    return (res.data || []).map(function (m) {
      var att = m.attachment || null;
      return {
        email: email, from: m.sender === "studio" ? "studio" : "me", text: m.body || "",
        fileData: att ? att.url : null, fileType: att ? att.type : null, fileName: att ? att.name : null, at: m.created_at
      };
    });
  }
  async function sendRemoteMessage(convId, email, text, attachment) {
    if (!client) {
      var m = { email: email, to: email, from: "studio", text: text || "" };
      if (attachment) { m.fileData = attachment.url; m.fileType = attachment.type; m.fileName = attachment.name; }
      window.bestudio.addMessage(m);
      return;
    }
    var conv = convId;
    if (!conv) { var c = await getConversation(email); conv = c.id; }
    var res = await client.from("messages").insert({
      conversation_id: conv, sender: "studio", body: text || "", attachment: attachment || null
    });
    if (res.error) throw new Error(res.error.message);
  }
  async function sendClientMessage(email, text, attachment) {
    if (!client) {
      var m = { email: email, from: "me", text: text || "" };
      if (attachment) { m.fileData = attachment.url; m.fileType = attachment.type; m.fileName = attachment.name; }
      window.bestudio.addMessage(m);
      return null;
    }
    var conv = await getConversation(email);
    var res = await client.from("messages").insert({
      conversation_id: conv.id, sender: "cliente", body: text || "", attachment: attachment || null
    });
    if (res.error) throw new Error(res.error.message);
    return conv.id;
  }
  async function listClients() {
    var bookings = [];
    try { bookings = await listBookings(); } catch (e) { bookings = []; }
    var map = {};
    bookings.forEach(function (b) {
      if (!map[b.email]) map[b.email] = [];
      map[b.email].push(b);
    });
    return Object.keys(map).sort().map(function (email) { return { email: email, bookings: map[email] }; });
  }

  window.BS = {
    configured: function () { return configured && !!client; },
    client: function () { return client; },
    ready: readyFn,
    settings: function () { return settingsCache; },
    getSetting: getSetting, saveSetting: saveSetting,
    feeValue: feeValue, whatsappValue: whatsappValue,
    servicesCache: function () { return servicesCache; },
    servicesFromRemote: function () { return servicesFromRemote; },
    loadServices: loadServices, saveServices: saveServices,
    recordPageView: recordPageView, visitorStats: visitorStats,
    uploadMedia: uploadMedia, uploadChatFile: uploadChatFile,
    sessionEmail: sessionEmail, register: register, login: login, logout: logout, isAdmin: isAdmin,
    listBookings: listBookings, myBookings: myBookings, addBooking: addBooking, updateBooking: updateBooking, payFee: payFee,
    getConversation: getConversation, listConversations: listConversations,
    conversationMessages: conversationMessages, sendRemoteMessage: sendRemoteMessage, sendClientMessage: sendClientMessage,
    listClients: listClients
  };
})();
