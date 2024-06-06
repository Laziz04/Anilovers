const open_header = document.getElementById("open_header");
const border = document.getElementById("border");

const openAnime = (id) => {
  window.location.href = `./kirish.html?id=${id}`;
};

const getFilteredIframe = (id) => {
  axios
    .get(`https://d90acc4e338622f6.mokky.dev/card?id=${id}`)
    .then((response) => {
      const filteredIframe = response.data;
      console.log(filteredIframe);

      filteredIframe.splice(0, 12).forEach((item, index) => {
        open_header.innerHTML += `
        <div class="row">
        
        <div class="col-xl-8 col-lg-8 col-md-7 col-12 mt-4 position-relative">  
          <div class="ytiframe">
  
            <iframe
            style="border-radius: 10px;"
            width="1045"
            height="549"
            src="${item.anime}"
            title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
         
          </div>
                <button class=" d-sm-block w-100 buttongh mb-5">${item.name}</button>

      </div>
      <div class="col-xl-4 col-lg-4 col-md-5 col-12 mt-4">

        <div class="invisible-scrollbar">
        <div class="sccrollbars_pad">
        <div class="qism1">
        <iframe class="qism1"
        width="1045"
        height="549"
        src="${item.qism2}"
        title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

     <button class=" d-sm-block w-100 buttongh mt-2">2 Qism</button>

       </div>
       <div class="qism1 mt-5">
       <iframe class="qism1"
       width="1045"
       height="549"
       src="${item.qism3}"
       title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin"
       allowfullscreen
     ></iframe>
      </div>
           <button class=" d-sm-block w-100 buttongh mt-1">3 Qism</button>

      <div class="qism1 ">
      <iframe class="qism1"
      width="1045"
      height="549"
      src="${item.qism4}"
      title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
     </div>
                <button class=" d-sm-block w-100 buttongh mt-1">4 Qism</button>

     <div class="qism1">
     <iframe class="qism1"
     width="1045"
     height="549"
     src="${item.qism5}"
     title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
     frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerpolicy="strict-origin-when-cross-origin"
     allowfullscreen
   ></iframe>
    </div>
               <button class=" d-sm-block w-100 buttongh mt-1">5 Qism</button>

    <div class="qism1">
    <iframe class="qism1"
    width="1045"
    height="549"
    src="${item.qism6}"
    title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
   </div>
              <button class=" d-sm-block w-100 buttongh mt-1">6 Qism</button>

   <div class="qism1">
   <iframe class="qism1"
   width="1045"
   height="549"
   src="${item.qism7}"
   title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
   frameborder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   referrerpolicy="strict-origin-when-cross-origin"
   allowfullscreen
 ></iframe>
  </div>
             <button class=" d-sm-block w-100 buttongh mt-1">7 Qism</button>


  <div class="qism1">
  <iframe class="qism1"
  width="1045"
  height="549"
  src="${item.qism8}"
  title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
 </div>
           <button class=" d-sm-block w-100 buttongh mt-1">8 Qism</button>

 <div class="qism1">
 <iframe class="qism1"
 width="1045"
 height="549"
 src="${item.qism9}"
 title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
 frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 referrerpolicy="strict-origin-when-cross-origin"
 allowfullscreen
></iframe>
</div>
           <button class=" d-sm-block w-100 buttongh mt-1">9 Qism</button>

<div class="qism1">
<iframe class="qism1"
width="1045"
height="549"
src="${item.qism10}"
title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen
></iframe>
</div>
           <button class=" d-sm-block w-100 buttongh mt-1">10 Qism</button>

<div class="qism1">
<iframe class="qism1"
width="1045"
height="549"
src="${item.qism11}"
title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen
></iframe>
</div>
           <button class=" d-sm-block w-100 buttongh mt-1">11 Qism</button>

<div class="qism1">
<iframe class="qism1"
width="1045"
height="549"
src="${item.qism12}"
title="Anime:Lv2 Super Aldash Mahoratlarim Bilan Oʻzga Dunyoda Hayot 9-qism"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen
></iframe>
</div>
           <button class=" d-sm-block w-100 buttongh mt-1">12 Qism</button>
        </div>
         
        </div>
      </div>
      
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

const malumot = (id) => {
  axios
    .get(`https://d90acc4e338622f6.mokky.dev/card?id=${id}`)
    .then((descrp) => {
      const comment_desc = descrp.data;
      console.log(comment_desc);

      comment_desc.forEach((item, index) => {
        border.innerHTML += `
          ${item.malumot}
        `;
      });
    });
};
malumot(id);
