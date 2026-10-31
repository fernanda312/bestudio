// BESTUDIO — configuração.
// A dona / o comprador preenche estes valores quando ligar o projeto.
// Sem SUPABASE_URL, o site funciona em modo local (neste dispositivo):
// conta, reservas e chat ficam guardados no navegador, para demonstração.
// Com SUPABASE_URL + chave pública, a mesma conta/reserva/chat passam
// a viver na base de dados. NUNCA pôr aqui a chave secreta (service_role).
window.BESTUDIO_CONFIG = {
  SUPABASE_URL: "https://jtaxmzjtbffrbyyeykxzz.supabase.co",
  SUPABASE_ANON_KEY: "", // <-- a dona envia a chave pública (publishable) em Settings > API, para eu completar a ligação
  // Email do admin, indicado pela dona em 2026-10-31.
  ADMIN_EMAIL: "yociha9742@stosan.com",
  // Taxa de reserva para segurar a sessão. Conta para o pagamento final,
  // não é um custo extra. O resto paga-se no estúdio / na entrega.
  BOOKING_FEE: 1000,
  // WhatsApp do estúdio, formato https://wa.me/258XXXXXXXXX
  // Pode ser substituído depois aqui ou no Admin (o Admin sobrepõe-se).
  // Enquanto não for substituído, o botão abre o WhatsApp em geral.
  WHATSAPP_URL: ""
};
