const comment = () => {
  axios.get("https://d90acc4e338622f6.mokky.dev/card").then((der) => {
    const opendesc = der.data;
    console.log(opendesc);
    border.innerHTML = "";
    border.innerHTML += `
    <div class="row">
    <div class="col-xl-6 mt-3">
      <div style="width: 300px">
        <label for="story"></label>

        <input
          id="coomen_inp"
          class="w-100 comment_input"
          type="text"
          placeholder="O'z fikringgizni qoldiring"
        />

        <button onclick="otpravit()" class="button w-100">Yuborish</button>
      </div>
    </div>
    <div class="col-xl-6 mt-3">
      <div
        id="comment_append"
        style="flex-wrap: wrap;"
        class="d-flex gap-2 invisible-scrollbars"
      ></div>
    </div>
  </div>
        `;
  });
};

const Creators = () => {
  axios.get("https://d90acc4e338622f6.mokky.dev/card").then((der) => {
    const opendesc = der.data;
    console.log(opendesc);
    border.innerHTML = "";
    border.innerHTML += `
    <div style="flex-wrap: wrap" class="d-flex gap-4 ">
    <div
      style="border-radius: 10px; width: 300px"
      class="p-2 d-flex gap-2 shadow-lg berdf"
    >
      <img
        style="border-radius: 50%"
        src="http://cdn.amediatv.uz/public/temp/3e9d5b9c5d37ebdf98ac611f0ec703de.jpg"
        alt=""
        width="60"
        height="60"
      />
      <div>
        <h5>Aziz Akhmadaliyev</h5>
        <p class="text-dark p-0 m-0">[•The Bot•]</p>
      </div>
    </div>
    <div
      style="border-radius: 10px; width: 300px"
      class=" p-2 d-flex gap-2 shadow-lg berdf"
    >
      <img
        style="border-radius: 50%"
        src="https://avatarfiles.alphacoders.com/375/375473.jpeg"
        alt=""
        width="70"
        height="70"
      />
      <div>
        <h5>
        Hamidulloh Normuminov</h5>
        <p class="p-0 m-0 text-dark">[•The Bot•]</p>
      </div>
    </div>
  </div>
          `;
  });
};

const otpravit = () => {
  const inputValue = document.getElementById("coomen_inp").value.trim();
  const comment_append = document.getElementById("comment_append");

  if (inputValue !== "") {
    axios
      .post("https://a4f1e264ed9f41b9.mokky.dev/izohlar", {
        comment: inputValue,
      })
      .then((response) => {
        const opendesc = response.data;
        console.log(opendesc);

        comment_append.innerHTML += `
            <div
              class="d-flex gap-2 align-items-center justify-content-between shadow-lg cooment_style w-100 pe-4"
            >
              <div class="d-flex gap-2 align-items-center">
                <img
                  style="border-radius: 50%"
                  src="./img/comment_user.png"
                  alt=""
                  width="60"
                  height="50"
                />
                <div>
                  <h5>${inputValue}</h5>
                </div>
              </div>
              <div style="cursor: pointer" class="d-flex gap-3">
                <i class="fa-solid fa-heart" style="color: #74c0fc"></i>
                <i class="fa-solid fa-share-nodes" style="color: #74c0fc"></i>
              </div>
            </div>
          `;

        document.getElementById("coomen_inp").value = "";
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  } else {
    Toastify({
      text: "Maydonni to'ldiring",
      duration: 3000,
      style: {
        background: "green",
      },
    }).showToast();
  }
};
