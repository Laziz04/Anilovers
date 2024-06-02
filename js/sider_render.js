const slder_render = () => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((response) => {
      const data = response.data;
      header.innerHTML = "";

      data.map((item) => {
        header.innerHTML += `
        <div id="carouselExampleDark" class="best carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://w.forfun.com/fetch/7e/7ebd6a2299ed5f398998e7b2f307793d.jpeg"
              class="d-block w-100 img"
              alt="https://w.forfun.com/fetch/7e/7ebd6a2299ed5f398998e7b2f307793d.jpeg"
            />
            <div style="text-align: start" class="carousel-caption w-100 row">
              <div  class="row  align-items-center">
                <div class="col-xl-6 col-6" >
                  <div class="slider_text text-white">
                    <h2 class="slidet_title">mabudlar minorasi [ 17+]</h2>
                    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, praesentium.</p>
                    </div>
                </div>
                <div class="col-xl-6 col-6 d-none d-md-block">
                  <div class="w-25">
                    <img
                      src="https://pbs.twimg.com/media/GIo64uoaUAA_VzI?format=jpg&name=4096x4096"
                      alt=""
                      width="100%"
                      class="img"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        `;
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

slder_render();
