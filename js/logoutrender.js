const renderlogout = document.getElementById("renderlogout");
const top_sales = document.getElementById("top_sales");

const renderLogaut = (id) => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((response) => {
      const data = response.data;
      renderlogout.innerHTML = "";
      data.map((item, index) => {
        renderlogout.innerHTML += `
        <li class="d-flex align-items-start gap-3 mb-3">
        <div>
          <img
          class="logren_img"
            style="border-radius: 8px"
            src="${item.img}"
            alt="${item.name}"
          />
        </div>
      <div style="flex-wrap:wrap" class="d-flex justify-content-between align-items-start  w-100 pe-3">
      <div>
      <a style="cursor:pointer" href="">
      <span class="logren_title">${item.name}</span>
      </a>
       <p class="logren_subtitle">${item.desc}</p>
       </div>

       <div class="d-flex align-items-center gap-2 mt-2 ">
       <i style="cursor: pointer;" onclick="edit(${item.id})"  class="fa-regular fa-pen-to-square" style="color: #0065b3;"></i>
       <i style="cursor: pointer;" onclick="delet(${item.id})" class="fa-solid fa-trash-arrow-up" style="color: #c42317;"></i>
       </div>
       </div>
 
      </div>
      </li>
        `;
      });
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
      Toastify({
        text: "Serverdan ma'lumot olishda xatolik yuz berdi",
        duration: 3000,
        style: {
          background: "red",
        },
      }).showToast();
    });
};

renderLogaut();
