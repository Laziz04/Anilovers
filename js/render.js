const row = document.getElementById("row");

const render = () => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((res) => {
      console.log(res.data);
      const bestcard = res.data;

      row.innerHTML = "";

      bestcard.forEach((item) => {
        row.innerHTML += `
        <div class="mt-5 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
            <div class="section_card position-relative">
                <div class="d-flex sdf w-100 align-items-center">
                    <span class="spank">${item.data}</span>
                </div>
                <img src="${item.img}" alt="" width="100%"/>
                <div class="content">
                    <h4 class="content_title">${item.name}</h4>
                    <div class="des">
                        <p class="content_subtitle text-white">Janri : ${item.desc}</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <a onclick="openAnime(${item.id})" id="hrfd-${item.id}" style="text-decoration: none;" href="#">
                                <button class="btton text-white d-flex align-items-center content_button">
                                    Korish
                                    <i class="me-3 fa-solid fa-play content_icon" style="color: #ffffff;"></i>
                                </button>
                            </a>
                            <i id="heart-${item.id}" onclick="basket(${item.id})" class="animatsiya fa-solid fa-heart psd" style="color: #ffffff"></i>
                        </div>
                    </div>
                </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const basket = (itemId) => {
  const heartIcon = document.getElementById(`heart-${itemId}`);

  if (heartIcon.style.color === "rgb(254, 10, 10)") {
    heartIcon.style.color = "#ffffff";
  } else {
    heartIcon.style.color = "rgb(254, 10, 10)";
  }
};

render();

// <!-- script _ siadbar Menu -->
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

// <!-- script input img -->

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    var files = event.target.files;
    var preview = document.getElementById("preview");
    preview.innerHTML = "";

    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      if (!file.type.match("image.*")) {
        continue;
      }

      var col = document.createElement("div");
      col.classList.add("col-md-3");

      var img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.classList.add("img-preview");

      preview.appendChild(img);
    }
  });

// <!-- activ _menu _saidbar -->

let navLinks = document.querySelectorAll(".nav-links li");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
