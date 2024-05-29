const input = document.getElementById("input");
const input_div = document.getElementById("input_div");

input.addEventListener("input", (e) => {
  const value = e.target.value.trim().toLowerCase();

  if (value.length > 0) {
    input_div.classList.remove("d-none");
    input_div.classList.add("crate");

    axios
      .get(`https://d90acc4e338622f6.mokky.dev/card?name=*${value}`)
      .then((response) => {
        const bestCards = response.data;

        input_div.innerHTML = "";

        bestCards.forEach((item) => {
          input_div.innerHTML += `
            <div class="search_table mb-3">
              <div class="d-flex align-items-start gap-2">
                <div class="search_table_img">
                  <img style="border-radius: 10px" src="${item.img}" alt="" width="50px" height="60px" />
                </div>
                <div>
                  <a href="./kirish.html" class="table_title">${item.name}</a>
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
