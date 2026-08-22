document.addEventListener("DOMContentLoaded", () => {
  const opening = document.getElementById("opening");
  const enterBtn = document.getElementById("enterBtn");
  const invitationBtn = document.getElementById("invitationBtn");
  const invitationModal = document.getElementById("invitationModal");
  const closeModal = document.getElementById("closeModal");

  document.body.classList.add("locked");

  if (enterBtn && opening) {
    enterBtn.addEventListener("click", () => {
      opening.classList.add("opening-hidden");
      document.body.classList.remove("locked");

      setTimeout(() => {
        opening.style.display = "none";
      }, 700);
    });
  }

  if (invitationBtn && invitationModal) {
    invitationBtn.addEventListener("click", () => {
      invitationModal.classList.add("show");
    });
  }

  if (closeModal && invitationModal) {
    closeModal.addEventListener("click", () => {
      invitationModal.classList.remove("show");
    });

    invitationModal.addEventListener("click", (event) => {
      if (event.target === invitationModal) {
        invitationModal.classList.remove("show");
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
