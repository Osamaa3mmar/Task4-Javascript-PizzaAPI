const cardsCont=document.querySelector(".cards");

// Fetching JSON data

async function getData(){
    const response= await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    console.log(response);
    const data= await response.json();
    console.log(data);
    console.log(data.recipes);
    fetchDataToComponent(data);
}
function fetchDataToComponent(data){
const cards=data.recipes.map(function(item){
return `<div class="card">
<div class="image">
<img src="${item.image_url}" alt="">
</div>
<h2 class="title">${item.title}</h2>
</div>`;
}).join("");
cardsCont.innerHTML=cards;
};

getData();