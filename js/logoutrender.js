const renderlogout = document.getElementById("renderlogout");
const top_sales = document.getElementById("top_sales");

const renderLogaut = () => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((response) => {
      const data = response.data;
      renderlogout.innerHTML = "";
      data.map((item) => {
        renderlogout.innerHTML += `
        <li class="d-flex align-items-start gap-3 mb-3">
        <div>
          <img
            style="border-radius: 8px"
            src="${item.img}"
            alt="${item.name}"
            width="80px"
            height="80px"
          />
        </div>
      <div class="d-flex justify-content-between w-100 pe-3">
      <div>
      <a style="cursor:pointer" href="">
      <span class="">${item.name}</span>
      </a>
       <p>${item.desc}</p>
       </div>

       <div class="d-flex align-items-center gap-2 ">
       <button class="action-btn edit-btn berch1" onclick="handleEdit(${item.id})"><i class="fa-regular fa-pen-to-square" style="color: #74C0FC;"></i></button>
       <button class="action-btn edit-btn berch2" onclick="handleDelete(${item.id})"><i class="fa-solid fa-trash-arrow-up" style="color: #d52020;"></i></button>
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

function handleEdit(itemId) {
  // Bu funksiya itemni tahrirlash uchun ishlatiladi
  console.log("Edit button clicked for item:", itemId);
  // Bu yerdan itemni tahrirlash yoki boshqa operatsiyalar bajarish mumkin
}

function handleDelete(itemId) {
  // Bu funksiya itemni o'chirish uchun ishlatiladi
  console.log("Delete button clicked for item:", itemId);
  // Bu yerdan itemni o'chirish yoki boshqa operatsiyalar bajarish mumkin
}

renderLogaut();
