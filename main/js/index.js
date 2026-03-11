const backToTopElement = document.getElementById("back-to-top-button");

const handleBackToTop = () => {
  window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
  backToTopElement.style.visibility = 'hidden';
};

backToTopElement.addEventListener("click", handleBackToTop);

const elementToObserve = document.querySelector('#about')

const options = {
  root: null,
  threshold: 0
};

const handleBackToTopVisibility = entries => {
  entries.forEach(entry => {

    if (entry.boundingClientRect.top < 0) {
      backToTopElement.style.visibility = 'visible';
      return
    }
    backToTopElement.style.visibility = 'hidden';

  })
}


const observer = new IntersectionObserver(handleBackToTopVisibility, options);

observer.observe(elementToObserve);