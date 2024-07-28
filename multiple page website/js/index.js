const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const isVisible = answer.style.display === 'block';

      document.querySelectorAll('.faq-answer').forEach(answer => {
          answer.style.display = 'none';
      });

      if (!isVisible) {
          answer.style.display = 'block';
      }
  });
});
