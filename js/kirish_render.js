const open_header = document.getElementById("open_header");

const openAnime = (id) => {
  window.location.href = `./kirish.html?id=${id}`;
};

const getFilteredIframe = (id) => {
  axios
    .get(`https://d90acc4e338622f6.mokky.dev/card?id=${id}`)
    .then((response) => {
      const filteredIframe = response.data;
      console.log(filteredIframe);

      filteredIframe.splice(0, 12).forEach((item) => {
        open_header.innerHTML += `
        <div class="mt-5 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
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
          `;
      });
    })
    .catch((error) => {
      console.error("Xatolik:", error);
    });
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
if (id) {
  getFilteredIframe(id);
}

// <div class="ytiframe">
// <iframe width="996" height="560" src="${item.iframe}" title="${item.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// </div>
