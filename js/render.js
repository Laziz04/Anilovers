const row = document.getElementById("row");

const render = () => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((res) => {
      console.log(res.data);
      const bestcard = res.data;

      bestcard.map((item) => {
        row.innerHTML += `
        <div class="mt-5 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12 ms-1">
          <div class="section_card position-relative">
            <div class="d-flex sdf w-100 align-items-center">
              <span class="spank">${item.data}</span>
            </div>
            <img src="${item.img}" alt=""/>
            <div class="content">
              <h4>${item.name}</h4>
              <div class="des">
                <p>${item.desc}</p>
                <div class="d-flex align-items-center justify-content-between">
                  <a style="text-decoration: none;" href="./kirish.html">
                    <button style="font-size: 19px" class="btton text-white d-flex align-items-center">
                      Korish
                      <i class="me-3 fa-solid fa-play" style="color: #ffffff; font-size: 12px"></i>
                    </button>
                  </a>
                  <i id="heart-${item.id}" onclick="basket(${item.id})" class="fa-solid fa-heart psd" style="color: #ffffff"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
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
