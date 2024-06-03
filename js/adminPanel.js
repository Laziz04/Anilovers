const editmodal = new bootstrap.Modal("#editmodal", {
  keyboard: false,
});
let lastId = 0;
const login_pagehtml = document.getElementById("login_pagehtml");

function closeModal() {
  const gmailInput = document.getElementById("gmail").value;
  const passwordInput = document.getElementById("password").value;

  if (gmailInput === "1234" && passwordInput === "1234") {
    window.location.href = "./login_page.html";
    Toastify({
      text: "Kirish muvaffaqiyatli",
      duration: 3000,
      style: {
        background: "green",
      },
    }).showToast();
  } else {
    Toastify({
      text: "Parol yoki kod noto'g'ri",
      duration: 3000,
      style: {
        background: "red",
      },
    }).showToast();

    console.log("Kirish noto'g'ri!");
  }
}
