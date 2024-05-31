const modalData = document.getElementById("modalData");
const modalName = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
let lastId = 0;

const editmodalAnime = new bootstrap.Modal("#editmodalAnime", {
  keyboard: false,
});

const new_card = new bootstrap.Modal("#new_card", {
  keyboard: false,
});
const editAnime = (id) => {
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

      editmodalAnime.show();
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
      renderLogautw();
      Toastify({
        text: "Ma'lumotlar o'zgartirildi",
        duration: 3000,
        style: {
          background: "green",
        },
      }).showToast();
      renderLogautw();
      editmodalAnime.hide();
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

const delet = (id) => {
  axios
    .delete(`https://d90acc4e338622f6.mokky.dev/card/${id}`)
    .then((res) => {
      console.log(res.data);
      window.location.reload();
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

const createAnime = () => {
  new_card.show();
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
      renderLogautw();
      data.value = "";
      title.value = "";
      img.value = "";
      textares.value = "";
      new_card.hide();
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
