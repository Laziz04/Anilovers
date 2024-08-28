const input = document.getElementById("input");
const input_div = document.getElementById("input_div");

input.addEventListener("input", (e) => {
  const value = e.target.value.trim().toLowerCase();

  if (value.length > 0) {
    input_div.classList.remove("d-none");
    input_div.classList.add("crate");

    axios
      .get(`https://6d548820c3f18dbd.mokky.dev/Cards?name=*${value}`)
      .then((response) => {
        const bestCards = response.data;

        input_div.innerHTML = "";

        bestCards.forEach((item, id) => {
          input_div.innerHTML += `
            <div class="search_table mb-3">
              <div class="d-flex align-items-start gap-2">
                <div class="search_table_img">
                  <img style="border-radius: 10px" src="${item.img}" alt="" width="70px" height="100px" />
                </div>
                <div>
                    <a style="color: #fff;" onclick="openAnime(${item.id})" id="hrfd-${item.id}" style="text-decoration: none;" href="#">
                                ${item.name}
                    </a>  
                </div>
              </div>
            </div>
          `;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    input_div.classList.remove("crate");
    input_div.classList.add("d-none");
  }
});
