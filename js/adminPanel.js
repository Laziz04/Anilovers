const editModal = new bootstrap.Modal("#editModal", {
  keyboard: false,
});

let lastId = 0;
function closeModal() {
  const gmail = document.getElementById("gmail");
  const password = document.getElementById("password");

  const modal = document.getElementById("adminPanel");

  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) {
    backdrop.parentNode.removeChild(backdrop);
  }

  if (gmail.value === "admin" && password.value === "200408") {
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
    Toastify({
      text: "parol yoki kod xato",
      duration: 3000,
      style: {
        background: "green",
      },
    }).showToast();

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

const delet = (id) => {
  axios
    .delete(`https://d90acc4e338622f6.mokky.dev/card/${id}`)
    .then((del) => {
      const delet = del.data;
      console.log(delet);
      renderLogaut();
      Toastify({
        text: "Anime o'chirildi",
        duration: 3000,
        style: {
          background: "green",
        },
      }).showToast();
    })
    .catch((e) => {
      console.error(e);
      Toastify({
        text: "Xatolik sodir bo'ldi. Qayta urinib ko'ring.",
        duration: 3000,
        style: {
          background: "rgb(109, 4, 4)",
        },
      }).showToast();
    });
};
const modalData = document.getElementById("modalData");
const modalName = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");

const edit = (id) => {
  lastId = id;
  axios
    .get(`https://d90acc4e338622f6.mokky.dev/card/${id}`)
    .then((res) => {
      const result = res.data;
      console.log(result);

      modalData.value = result.data;
      modalName.value = result.name;
      modalImg.value = result.img;
      modalDesc.value = result.desc;

      editModal.show();
    })
    .catch((error) => {
      console.error("Ma'lumotlarni olishda xatolik:", error);
    });
};

const savelogmodal = () => {
  const data = {
    data: modalData.value,
    name: modalName.value,
    img: modalImg.value,
    desc: modalDesc.value,
  };

  axios
    .patch(`https://d90acc4e338622f6.mokky.dev/card/${lastId}`, data)
    .then((res) => {
      const updatedData = res.data;
      console.log(updatedData);
      renderLogaut();
      Toastify({
        text: "Ma'lumotlar o'zgartirildi",
        duration: 3000,
        style: {
          background: "green",
        },
      }).showToast();
      renderLogaut();
      editModal.hide();
    })
    .catch((error) => {
      console.error("Xatolik sodir bo'ldi:", error);
      Toastify({
        text: "Xatolik sodir bo'ldi. Qayta urinib ko'ring.",
        duration: 3000,
        style: {
          background: "rgb(109, 4, 4)",
        },
      }).showToast();
    });
};
const data = document.getElementById("data");
const title = document.getElementById("name");
const img = document.getElementById("img");
const fileInput = document.getElementById("fileInput");
const iframe = document.getElementById("iframe");
const textares = document.getElementById("textares");

const newanime = () => {
  const animeData = {
    data: data.value,
    name: title.value,
    img: img.value,
    desc: textares.value,
  };

  axios
    .post("https://d90acc4e338622f6.mokky.dev/card", animeData)
    .then((response) => {
      const newAnime = response.data;
      Toastify({
        text: "Yangi anime qo'shildi.",
        duration: 3000,
        style: {
          background: "rgb(109, 4, 4)",
        },
      }).showToast();
    })
    .catch((error) => {
      console.error("Yangi anime qo'shishda xatolik:", error);
      Toastify({
        text: "Xatolik sodir bo'ldi. Qayta urinib ko'ring.",
        duration: 3000,
        style: {
          background: "rgb(109, 4, 4)",
        },
      }).showToast();
    });
};
