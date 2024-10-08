const modalData = document.getElementById("modalData");
const modalName = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const searchAnilovers = document.getElementById("searchAnilovers");
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
    .get(`https://6d548820c3f18dbd.mokky.dev/Cards/${id}`)
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
    .patch(`https://6d548820c3f18dbd.mokky.dev/Cards/${lastId}`, data)
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
    .delete(`https://6d548820c3f18dbd.mokky.dev/Cards/${id}`)
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
    .post("https://6d548820c3f18dbd.mokky.dev/Cards", animeData)
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

searchAnilovers.addEventListener("input", (e) => {
  const searchanime = e.target.value;
  axios
    .get(`https://6d548820c3f18dbd.mokky.dev/Cards?name=*${searchanime}`)
    .then((anj) => {
      const bestcard = anj.data;
      if (searchanime.length > 0) {
        renderLogaut.innerHTML = "";
        bestcard.forEach((item) => {
          renderLogaut.innerHTML += `
          <tr>
          <td>
            <img
              alt="..."
              src="${item.img}"
              class="avatar avatar-sm rounded-circle me-2"
            />
            <a class="text-heading font-semibold" href="./kirish.html">
              ${item.name}
            </a>
          </td>
          <td>${item.data}</td>
          <td>
            <img
              alt="..."
              src="${item.logo}"
              class="avatar avatar-xs rounded-circle me-2"
            />
            <a class="text-heading font-semibold" href="#">
              Anilovers
            </a>
          </td>
          <td>
              ${item.desc}
            </span>
          </td>
          <td class="text-end">
            <button onclick="editAnime(${item.id})" class="btn btn-sm btn-neutral">View</button>
            <button onclick="delet(${item.id})" class="btn btn-sm btn-neutral"><i class="fa-solid fa-trash-arrow-up" style="color: #c42317;"></i></button>
                        </td>
        </tr>
      `;
        });
      } else {
        renderLogautw();
      }
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
});
