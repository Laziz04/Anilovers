const slider_render = () => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((sio) => {
      const slider = sio.data; // "sio" dan ma'lumotlarni olish uchun "data" dan foydalanamiz

      // "header" nomli HTML elementni topish
      const swipper = document.getElementById("swipper");

      swipper.innerHTML = "";
      slider.map((item) => {
        swipper.innerHTML += `
    
              <img src="${item.slider_img}" alt=""  width="900px" />
          
          `;
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

slider_render();
