const editModal = new bootstrap.Modal("#editModal", {
  keyboard: false,
});
let lastId = 0;

function closeModal() {
  const gmailInput = document.getElementById("gmail").value;
  const passwordInput = document.getElementById("password").value;

  const modal = document.getElementById("adminPanel");

  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) {
    backdrop.parentNode.removeChild(backdrop);
  }

  if (gmailInput === "adminaka" && passwordInput === "1234") {
    console.log("Kirish muvaffaqiyatli!");

    const nav_menu = document.getElementById("nav_menu");
    const header = document.getElementById("header");
    const secr_button = document.getElementById("secr_button");
    const section_card = document.getElementById("section_card");
    const secr_yangiliklar = document.getElementById("secr_yangiliklar");
    const footer = document.getElementById("footer");
    const Admin_panel = document.getElementById("Admin_panel");

    if (nav_menu) nav_menu.style.display = "none";
    if (header) header.style.display = "none";
    if (secr_button) secr_button.style.display = "none";
    if (section_card) section_card.style.display = "none";
    if (secr_yangiliklar) secr_yangiliklar.style.display = "none";
    if (footer) footer.style.display = "none";

    if (Admin_panel) {
      Admin_panel.classList.remove("d-none");
      Admin_panel.style.display = "block";
    }

    modal.style.display = "none";
  } else {
    Toastify({
      text: "Parol yoki kod noto'g'ri",
      duration: 3000,
      style: {
        background: "green",
      },
    }).showToast();

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
      data.value = "";
      title.value = "";
      img.value = "";
      textares.value = "";
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
// const anime_list = document.getElementsByClassName("anime_list")[0];
// const respons_block = () => {
//   anime_list.style.display = "block";
//   const renderLogout = document.getElementById("renderlogout");

//   if (renderLogout) {
//     renderLogout.innerHTML = "";
//     console.log("salom");
//   } else {
//     console.error("renderlogout not found");
//   }
// };

// respons_block();
