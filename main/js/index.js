const backToTopElement = document.getElementById("back-to-top-button");

const handleBackToTop = () => {
  window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
  backToTopElement.style.visibility = "hidden";
};

backToTopElement.addEventListener("click", handleBackToTop);

const elementToObserve = document.querySelector("#about");

const options = {
  root: null,
  threshold: 0,
};

const handleBackToTopVisibility = (entries) => {
  entries.forEach((entry) => {
    if (entry.boundingClientRect.top < 0) {
      backToTopElement.style.visibility = "visible";
      return;
    }
    backToTopElement.style.visibility = "hidden";
  });
};

const observer = new IntersectionObserver(handleBackToTopVisibility, options);

observer.observe(elementToObserve);

const JOGO = "Dark Souls Remastered";
const WHATSAPP_NUMBER = "5531985786782";

function gerarLinkWhatsApp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}

document.querySelectorAll(".btn-comprar").forEach(function (btn) {
  const produto = btn.getAttribute("data-produto");
  const mensagem = `Olá! Tenho interesse em comprar o pacote de ${produto} do ${JOGO}. Poderia me passar mais informações?`;
  btn.href = gerarLinkWhatsApp(mensagem);
  btn.target = "_blank";
});

const footerWpp = document.getElementById("whatsapp-footer");
const mensagemFooter = `Olá! Vim pelo site da Koka Souls e gostaria de mais informações sobre ${JOGO}.`;
footerWpp.href = gerarLinkWhatsApp(mensagemFooter);
