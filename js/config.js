// BESTUDIO — configuração.
// A dona / o comprador preenche estes valores quando ligar o projeto.
// Sem SUPABASE_URL, o site funciona em modo local (neste dispositivo):
// conta, reservas e chat ficam guardados no navegador, para demonstração.
// Com SUPABASE_URL + chave pública, a mesma conta/reserva/chat passam
// a viver na base de dados. NUNCA pôr aqui a chave secreta (service_role).
window.BESTUDIO_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",
  // Email do admin. Vazio = o dono define-o na página Admin (só local,
  // até pôr aqui o email definitivo para produção).
  ADMIN_EMAIL: "",
  // Taxa de reserva para segurar a sessão. Conta para o pagamento final,
  // não é um custo extra. O resto paga-se no estúdio / na entrega.
  BOOKING_FEE: 1000,
  // WhatsApp do estúdio, formato https://wa.me/258XXXXXXXXX
  // Vazio = botão WhatsApp fica indisponível até o dono o pôr aqui.
  WHATSAPP_URL: ""
};
