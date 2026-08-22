document.addEventListener("DOMContentLoaded", function () {

  const opening = document.getElementById("opening");
  const enterBtn = document.getElementById("enterBtn");

  const invitationBtn = document.getElementById("invitationBtn");
  const invitationModal = document.getElementById("invitationModal");
  const closeModal = document.getElementById("closeModal");


  /* =========================
     INITIAL PAGE STATE
  ========================== */

  document.body.classList.add("locked");


  /* =========================
     OPEN INVITATION
     SMOOTH TRANSITION
  ========================== */

  if (enterBtn && opening) {

    enterBtn.addEventListener("click", function () {
  opening.style.animation = "fadeSlideUp 1.5s ease forwards";
  document.body.classList.remove("locked");

  setTimeout(() => {
    opening.style.display = "none";
  }, 1500);
});
  }


  /* =========================
     INVITATION MODAL
  ========================== */

  if (invitationBtn && invitationModal) {

    invitationBtn.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      invitationModal.classList.add("show");

    });

  }


  /* =========================
     CLOSE INVITATION MODAL
  ========================== */

  if (closeModal && invitationModal) {

    closeModal.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      invitationModal.classList.remove("show");

    });


    invitationModal.addEventListener("click", function (event) {

      if (event.target === invitationModal) {
        invitationModal.classList.remove("show");
      }

    });

  }


  /* =========================
     SMOOTH SCROLL
  ========================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

});
