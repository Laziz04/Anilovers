const newAnime = document.getElementById("newAnime");
const anifilim = document.getElementById("anifilim");
const barch = document.getElementById("barch");
const endanime = document.getElementById("endanime");
const hammr = document.getElementById("hamma");

const hamma = () => {
  hammr.classList.toggle("active");
  newAnime.classList.remove("active");
  anifilim.classList.remove("active");

  render();
};

const animeNews = () => {
  newAnime.classList.add("active");
  anifilim.classList.remove("active");
  barch.classList.remove("active");
  hammr.classList.remove("active");

  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((response) => {
      const animeList = response.data;
      row.innerHTML = "";

      animeList.forEach((anime) => {
        if (anime.yil === "2024") {
          row.innerHTML += `
          <div class="mt-5 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
              <div class="section_card position-relative">
                  <div class="d-flex sdf w-100 align-items-center">
                      <span class="spank">${anime.yil}</span>
                  </div>
                  <img src="${anime.img}" alt="" width="100%"/>
                  <div class="content">
                      <h4 class="content_title">${anime.name}</h4>
                      <div class="des">
                          <p class="content_subtitle text-white">Janri : ${anime.desc}</p>
                          <div class="d-flex align-items-center justify-content-between">
                              <a onclick="openAnime(${anime.id})" id="hrfd-${anime.id}" style="text-decoration: none;" href="#">
                                  <button class="btton text-white d-flex align-items-center content_button">
                                      Korish
                                      <i class="me-3 fa-solid fa-play content_icon" style="color: #ffffff;"></i>
                                  </button>
                              </a>
                              <i id="heart-${anime.id}" onclick="basket(${anime.id})" class="animatsiya fa-solid fa-heart psd" style="color: #ffffff"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`;
        } else {
          console.log("xato");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const animeFilim = () => {
  anifilim.classList.add("active");
  newAnime.classList.remove("active");
  hammr.classList.remove("active");

  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((response) => {
      const animeList = response.data;
      row.innerHTML = "";

      animeList.forEach((anime) => {
        if (anime.film.length > 0) {
          row.innerHTML += `
            <div class="mt-5 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div class="section_card position-relative">
                    <div class="d-flex sdf w-100 align-items-center">
                        <span class="spank">${anime.yil}</span>
                    </div>
                    <img src="${anime.img}" alt="" width="100%"/>
                    <div class="content">
                        <h4 class="content_title">${anime.name}</h4>
                        <div class="des">
                            <p class="content_subtitle text-white">Janri : ${anime.desc}</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <a onclick="openAnime(${anime.id})" id="hrfd-${anime.id}" style="text-decoration: none;" href="#">
                                    <button class="btton text-white d-flex align-items-center content_button">
                                        Korish
                                        <i class="me-3 fa-solid fa-play content_icon" style="color: #ffffff;"></i>
                                    </button>
                                </a>
                                <i id="heart-${anime.id}" onclick="basket(${anime.id})" class="animatsiya fa-solid fa-heart psd" style="color: #ffffff"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        } else {
          console.log("xato");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const barchasi = () => {
  newAnime.classList.remove("active");
  anifilim.classList.remove("active");
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((res) => {
      console.log(res.data);
      const bestcard = res.data;

      row.innerHTML = "";

      bestcard.forEach((item) => {
        row.innerHTML += `
      <div class="mt-5 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
          <div class="section_card cardlar position-relative">
              <div class="d-flex sdf w-100 align-items-center">
                  <span class="spank">${item.yil}</span>
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

let startIndex = 0;

const fetchAndDisplayCards = () => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((res) => {
      console.log(res.data);
      const rsatish = res.data;

      rsatish.slice(startIndex, startIndex + 7).forEach((item) => {
        const card = document.createElement("div");
        card.classList.add(
          "mt-5",
          "col-xl-2",
          "col-lg-3",
          "col-md-3",
          "col-sm-4",
          "col-6",
          "card"
        );
        card.style.transform = "scale(0)";
        setTimeout(() => {
          card.style.transform = "scale(1)";
        }, 50);

        card.innerHTML = `
        <div class="section_card position-relative">
        <div class="d-flex sdf w-100 align-items-center">
            <span class="spank">${item.yil}</span>
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
        </div>
        </div>`;
        row.appendChild(card);
      });
      startIndex += 12;
    })
    .catch((err) => {
      console.log(err);
    });
};

const next = () => {
  fetchAndDisplayCards();
};

fetchAndDisplayCards();
