const openAnime = (id) => {
  axios
    .get(`https://d90acc4e338622f6.mokky.dev/card/${id}`)
    .then((response) => {
      const animeData = response.data;
      //   window.location.href = "./kirish.html";

      const animeDatafind = animeData.filter((item) => item.id === id)[0];

      open_header.innerHTML = `
        <div class="row">
          <div class="col-md-4">
            <img src="${animeDatafind.image}" alt="" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h1>${animeDatafind.name}</h1>
            <p>${animeDatafind.description}</p>
            <iframe width="996" height="560" src="${animeDatafind.iframe}" title="Ochko&#39;z Berserk 1 FASL 1 QISM | YANGI ANIMELAR | 2024 ANIMELAR |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <!-- Changed here -->
          </div>
        </div>`;
    })
    .catch((error) => {
      console.error(error);
      Toastify({
        text: "Xatolik yuz berdi",
        duration: 3000,
        style: {
          background: "red",
        },
      }).showToast();
    });
};
