// BESTUDIO — catálogo de serviços, preços em MT.
// O admin pode mudar preço/nome no Admin; estas são as bases de venda.
window.BESTUDIO_SERVICES = [
  { id: "voz", cat: "musica", name: "Gravação de Voz", unit: "hora", price: 1500, img: "images/microfone.jpg", desc: "Voz limpa, gravada e tratada, pronta para música, vídeo ou rádio." },
  { id: "banda", cat: "musica", name: "Gravação de Banda", unit: "hora", price: 3500, img: "images/sala-guitarras.jpg", desc: "Banda completa, sala tratada, captação instrumento a instrumento." },
  { id: "mixagem", cat: "musica", name: "Mixagem", unit: "música", price: 4500, img: "images/sala-mistura.jpg", desc: "Equilíbrio, espaço e peso: a música pronta para publicar." },
  { id: "masterizacao", cat: "musica", name: "Masterização", unit: "música", price: 3000, img: "images/escuta.jpg", desc: "Volume e brilho finais, iguais em todas as plataformas." },
  { id: "dj", cat: "musica", name: "DJ & Beats", unit: "sessão", price: 6500, img: "images/dj.jpg", desc: "Beats e sets produzidos no estúdio, com o teu som." },
  { id: "pacote-mensal", cat: "musica", name: "Pacote Mensal", unit: "mês", price: 18000, img: "images/home-studio.jpg", desc: "Sessões regulares ao longo do mês, com prioridade na agenda." },
  { id: "podcast", cat: "podcast", name: "Podcast em Estúdio", unit: "episódio", price: 5000, img: "images/cabine-podcast.jpg", desc: "Gravação e edição de podcast, com voz limpa e ritmo certo." },
  { id: "video-podcast", cat: "podcast", name: "Vídeo Podcast", unit: "episódio", price: 9500, img: "images/podcast-mulher.jpg", desc: "Podcast em áudio e vídeo, pronto para publicar." },
  { id: "master-podcast", cat: "podcast", name: "Masterização Podcast", unit: "episódio", price: 2000, img: "images/sala-acustica.jpg", desc: "Episódio já gravado, tratado e nivelado para publicar." },
  { id: "locucao", cat: "publicidade", name: "Locução", unit: "serviço", price: 2500, img: "images/microfone.jpg", desc: "Voz profissional para anúncios, vídeos e conteúdos." },
  { id: "spot", cat: "publicidade", name: "Spot Publicitário", unit: "serviço", price: 7500, img: "images/sala-acustica.jpg", desc: "Spot completo para rádio e digital, com locução e mistura." },
  { id: "video", cat: "publicidade", name: "Vídeo & Cobertura", unit: "serviço", price: 8000, img: "images/fotografo.jpg", desc: "Registo em vídeo da sessão, do evento ou da marca." }
];
window.BESTUDIO_CATS = { musica: "Música", podcast: "Podcast", publicidade: "Publicidade" };
window.fmtMT = function (n) {
  return Number(n).toLocaleString("pt-MZ").replace(/,/g, " ") + " MT";
};
