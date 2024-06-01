const renderLogaut = document.getElementById("renderlogout");
const loading = `
<button class="" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </button>
`;

const renderLogautw = () => {
  axios
    .get("https://d90acc4e338622f6.mokky.dev/card")
    .then((response) => {
      const data = response.data;

      data.map((item, index) => {
        renderLogaut.innerHTML += `

          <tr>
            <td>
              <img
                alt="..."
                src="${item.img}"
                class="avatar avatar-sm rounded-circle me-2"
              />
              <a class="text-heading font-semibold" href="#">
                ${item.name}
              </a>
            </td>
            <td>${item.data}</td>
            <td>
              <img
                alt="..."
                src="${item.logo}"
                class="avatar avatar-xs rounded-circle me-2"
              />
              <a class="text-heading font-semibold" href="#">
                Anilovers
              </a>
            </td>
            <td>
                ${item.desc}
              </span>
            </td>
            <td class="text-end">
            <button onclick="editAnime(${item.id})" class="btn btn-sm btn-neutral">View</button>
            <button onclick="delet(${item.id})" class="btn btn-sm btn-neutral"><i class="fa-solid fa-trash-arrow-up" style="color: #c42317;"></i></button>
                        </td>
    
              </td>
          </tr>
        `;
      });
    })
    .catch((error) => {});
};

renderLogautw();
