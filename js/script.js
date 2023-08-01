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
        modal.classList.remove("active");
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

function initValidateForm() {
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let messageText = document.querySelector("#message");

  const errorName = document.querySelector(".error-name");
  const errorEmail = document.querySelector(".error-email");
  const errorMessage = document.querySelector(".error-message");
  const btnSubmit = document.querySelector(".btn-submit");

  if (nameInput && emailInput && messageText) {
    function resetStyles() {
      errorName.classList.remove("active");
      nameInput.classList.remove("error-focus", "sucess-focus");
      errorEmail.classList.remove("active");
      emailInput.classList.remove("error-focus", "sucess-focus");
      errorMessage.classList.remove("active");
      messageText.classList.remove("error-focus", "sucess-focus");
    }

    function validateForm(event) {
      event.preventDefault();
      resetStyles();

      if (messageText.value === "") {
        errorMessage.classList.add("active");
        messageText.classList.add("error-focus");
        messageText.focus();
      } else {
        errorMessage.classList.remove("active");
        messageText.classList.remove("error-focus");
        messageText.classList.add("sucess-focus");
      }

      if (!emailInput.value.match(emailRegex)) {
        errorEmail.classList.add("active");
        emailInput.classList.add("error-focus");
        emailInput.focus()
      } else {
        errorEmail.classList.remove("active");
        emailInput.classList.remove("error-focus");
        emailInput.classList.add("sucess-focus");
      }

      if (nameInput.value === "") {
        errorName.classList.add("active");
        nameInput.classList.add("error-focus");
        nameInput.focus();
      } else {
        errorName.classList.remove("active");
        nameInput.classList.remove("error-focus");
        nameInput.classList.add("sucess-focus");
      }
    }
    btnSubmit.addEventListener("click", validateForm);
  }
}

function initHover() {
  const rooms = document.querySelectorAll("[data-rooms='room']");
  rooms[1].classList.add("active");

  if (rooms) {
    function activeOnHover() {
      const isActive = this.classList.contains("active");

      rooms.forEach((room) => {
        room.classList.remove("active");
      });

      if (!isActive) {
        this.classList.add("active");
      }
    }

    rooms.forEach((room) => {
      room.addEventListener("click", activeOnHover);
    });
  }
}

function initTabImages() {
  const roomsTab = document.querySelectorAll("[data-rooms='room']")
  const images = document.querySelectorAll("[data-rooms='image']");
  images[1].classList.add("active");

  if(roomsTab && images)  {
    function activeTab(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add("active");
        } else {
          image.classList.remove("active");
        }
      });
    }
    
    roomsTab.forEach((content, index) => {
      content.addEventListener("click", () => {
        activeTab(index);
      });
    })
  }
}

function initTabTexts() {
  const roomsTabText = document.querySelectorAll("[data-rooms='room']")
  const texts = document.querySelectorAll("[data-rooms='text']");
  texts[1].classList.add("active");
  
  if(roomsTabText && texts) {
    function activeTab(index) {
      texts.forEach((text, i) => {
        if (i === index) {
          text.classList.add("active");
        } else {
          text.classList.remove("active");
        }
      });
    }
    
    roomsTabText.forEach((content, index) => {
      content.addEventListener("click", () => {
        activeTab(index);
      });
    })
  }
}


initModal();
initValidateForm();
initHover();
initTabImages();
initTabTexts();
