const swipper = document.getElementById("swipper");

const sliderRender = () => {
  axios.get(`https://038b9be16bd53885.mokky.dev/header_img`).then((sld) => {
    const slder = sld.data;
    console.log(slder);
    slder.map((item) => {
      swipper.innerHTML += `
      <div class="swiper-slide">
      <img
        src="${item.img1}"
        alt=""
      />
    </div>
    <div class="swiper-slide">
      <img
        src="${item.img2}"
        alt=""
      />
    </div>
    <div class="swiper-slide">
      <img
        src="${item.img3}"
        alt=""
      />
    </div>
    <div class="swiper-slide">
      <img
        src="${item.img4}"
        alt=""
      />
    </div>
    <div class="swiper-slide">
      <img
        src="${item.img5}"
        alt=""
      />
    </div>
    <div class="swiper-slide">
      <img
        src="${item.img6}"
        alt=""
      />
    </div>
        `;
    });
  });
};

sliderRender();
