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
          <div class="ytiframe">
          <iframe width="996" height="560" src="${item.iframe}" title="${item.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
