function initModal() {
  const modal = document.querySelector(".modal");
  const btn = document.querySelector(".btn-contact");
  const btnClose = document.querySelector(".btn-close");

  if (modal && btn && btnClose) {
    function activeModal() {
      modal.classList.add("active");
    }

    function removeModal() {
      modal.classList.remove("active");
    }

    function removeModalOnEsc(event) {
      if (event.key === "Escape") {
        modal.classList.contains("active");
        if (modal) {
          modal.classList.remove("active");
        }
      }
    }

    function removeModalOutside(event) {
      if (event.target.classList.contains("modal")) {
        event.target.classList.remove("active");
      }
    }

    btn.addEventListener("click", activeModal);
    btnClose.addEventListener("click", removeModal);
    document.addEventListener("keydown", removeModalOnEsc);
    document.addEventListener("click", removeModalOutside);
  }
}

initModal();