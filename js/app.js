// BESTUDIO — base local ponto a ponto.
// Sem Supabase ligado, conta, reservas e chat vivem neste dispositivo
// (localStorage), para o fluxo funcionar de ponta a ponta em demonstração.
// Com Supabase ligado (js/config.js), o mesmo fluxo deve passar para a
// base de dados — essa ligação é o passo da dona, com o projeto e as
// chaves Zumbo, e não é fingida aqui.
(function () {
  var LS = window.localStorage;
  function read(k, d) { try { var v = LS.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function write(k, v) { LS.setItem(k, JSON.stringify(v)); }
  function cfg() { return window.BESTUDIO_CONFIG || {}; }
  function services() {
    var over = read("bestudio_services_override", null);
    var base = window.BESTUDIO_SERVICES || [];
    if (!over) return base;
    return base.map(function (s) { return over[s.id] ? Object.assign({}, s, over[s.id]) : s; });
  }
  function service(id) { return services().filter(function (s) { return s.id === id; })[0]; }
  function session() { return read("bestudio_session", null); }
  function setSession(s) { write("bestudio_session", s); }
  function adminEmail() { return cfg().ADMIN_EMAIL || read("bestudio_admin_email", "") || ""; }
  function whatsappUrl() { return read("bestudio_whatsapp_url", "") || cfg().WHATSAPP_URL || "https://wa.me/"; }
  function isAdmin() { var s = session(); return !!(s && adminEmail() && s.email === adminEmail()); }
  function hash(pw) {
    // Hash simples para o modo local (não é segurança de produção;
    // com Supabase, a senha é tratada pela autenticação da Supabase).
    var h = 0; for (var i = 0; i < pw.length; i++) { h = ((h << 5) - h + pw.charCodeAt(i)) | 0; }
    return "h" + h;
  }
  function register(email, pw) {
    var users = read("bestudio_users", []);
    if (users.filter(function (u) { return u.email === email; })[0]) return { ok: false, err: "Já existe conta com este email. Entra em vez de criar." };
    users.push({ email: email, pw: hash(pw) }); write("bestudio_users", users);
    setSession({ email: email }); return { ok: true };
  }
  function login(email, pw) {
    var u = read("bestudio_users", []).filter(function (x) { return x.email === email; })[0];
    if (!u) return { ok: false, err: "Conta não encontrada. Cria conta com este email." };
    if (u.pw !== hash(pw)) return { ok: false, err: "Palavra-passe errada." };
    setSession({ email: email }); return { ok: true };
  }
  function logout() { LS.removeItem("bestudio_session"); }
  // Reserva pendente: intenção -> conta -> ação concretizada, sem perder nada.
  function pending() { return read("bestudio_pending", null); }
  function setPending(p) { write("bestudio_pending", p); }
  function clearPending() { LS.removeItem("bestudio_pending"); }
  function requireAccount(next) {
    if (session()) return true;
    setPending({ next: next, at: Date.now() });
    location.href = "conta.html";
    return false;
  }
  function bookings() { return read("bestudio_bookings", []); }
  function myBookings() { var s = session(); if (!s) return []; return bookings().filter(function (b) { return b.email === s.email; }); }
  function addBooking(b) {
    var all = bookings(); b.id = "B" + Date.now(); b.created = new Date().toISOString();
    b.status = b.status || "a aguardar pagamento"; all.push(b); write("bestudio_bookings", all); return b;
  }
  function updateBooking(id, patch) {
    var all = bookings().map(function (b) { return b.id === id ? Object.assign({}, b, patch) : b; });
    write("bestudio_bookings", all);
  }
  function messages() { return read("bestudio_messages", []); }
  function addMessage(m) {
    var all = messages(); m.at = new Date().toISOString(); all.push(m); write("bestudio_messages", all); return m;
  }
  function fee() { var o = read("bestudio_booking_fee", null); if (o != null) return o; return (cfg().BOOKING_FEE != null ? cfg().BOOKING_FEE : 1000); }
  window.bestudio = {
    cfg: cfg, services: services, service: service, session: session, setSession: setSession, whatsappUrl: whatsappUrl,
    adminEmail: adminEmail, isAdmin: isAdmin, register: register, login: login, logout: logout,
    pending: pending, setPending: setPending, clearPending: clearPending, requireAccount: requireAccount,
    bookings: bookings, myBookings: myBookings, addBooking: addBooking, updateBooking: updateBooking,
    messages: messages, addMessage: addMessage, fee: fee,
    supabaseConfigured: function () { return !!(cfg().SUPABASE_URL && cfg().SUPABASE_ANON_KEY); }
  };
})();
