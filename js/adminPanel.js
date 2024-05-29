function closeModal() {
  const gmail = document.getElementById("gmail");
  const password = document.getElementById("password");

  const modal = document.getElementById("adminPanel");

  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) {
    backdrop.parentNode.removeChild(backdrop);
  }

  if (gmail.value === "admin" && password.value === "20040826") {
    console.log("Kirish muvaffaqiyatli!");

    nav_menu.style.display = "none";
    header.style.display = "none";
    secr_button.style.display = "none";
    section_card.style.display = "none";
    secr_yangiliklar.style.display = "none";
    footer.style.display = "none";

    Admin_panel.classList.remove("d-none");
    Admin_panel.style.display = "block";

    // Modalni yashirish
    modal.style.display = "none";
  } else {
    alert("Login yoki parol noto'g'ri");

    // Modalni yashirish
    modal.style.display = "none";
    console.log("Kirish noto'g'ri!");
  }
}

const log_out = () => {
  nav_menu.style.display = "block";
  header.style.display = "block";
  secr_button.style.display = "block";
  section_card.style.display = "block";
  secr_yangiliklar.style.display = "block";
  footer.style.display = "block";
  Admin_panel.classList.add("d-none");
};
