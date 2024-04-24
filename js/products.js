const API__URL = "https://fakestoreapi.com";
let singleContent = document.querySelector(".single__content");
let loading = document.querySelector(".loading__item");

async function fetchData(api) {
  let param = new URLSearchParams(window.location.search);
  let id = param.get("id");
  const data = await fetch(`${api}/products/${id}`);
  data
    .json()
    .then((res) => createContent(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}

fetchData(API__URL);

function createContent(data) {
  console.log(data);

  singleContent.innerHTML = `
          <div  class="img">
            <img src=${data.image} alt="">
          </div>
          <div class="content__info">
            <h2>${data.title}</h2>
            <p>${data.description}</p>
            <div class="category">
                <p>Category</p>
                <h2>${data.category}</h3>
            </div>
            <div class="category">
                <p>Price</p>
                <h2>${data.price}₽</h2>
            </div>
            <button class="buy__btn">Buy now</button>
          </div>
        `;
}


function createLoadingCard(count) {
  let loadCard = "";
    loadCard += `   
          <div class="loading__img bg__animation"></div>
          <div class="loading__title bg__animation">
            <div class="bg__animation"></div>
            <div class="bg__animation"></div>
          </div>
            `;
    loading.innerHTML = loadCard;
}

createLoadingCard(90);

