
let container = document.getElementById("container");
const paginationContainer = document.getElementById("pagination-container");
let data;
let currentPage = 1;
let itemsPerPage = 9;
async function getData(){
    try{
     let res = await fetch("https://api.escuelajs.co/api/v1/products");
      data = await res.json();
     appendProduct(data);
    //  console.log('data: ', data);
    createPaginationButtons(data);
    showPage(currentPage);
    }catch(err){
     console.log("error:",err)
    }
}

getData();

function createPaginationButtons(data) {
    let numOfPages = Math.ceil(data.length / itemsPerPage);
    paginationContainer.innerHTML = null;
    for (let i = 1; i <= numOfPages; i++) {
      let button = document.createElement("button");
      button.innerText = i;
      button.addEventListener("click", function () {
        currentPage = i;
        showPage(currentPage);
      });
      paginationContainer.appendChild(button);
    }
  }
  
  function showPage(page) {
    let startIndex = (page - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let productsToShow = data.slice(startIndex, endIndex);
    appendProduct(productsToShow);
  }
function appendProduct(data){
    container.innerHTML = null;
    data.forEach(function(el){
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.images[0];
        let title = document.createElement("h2");
        title.innerText = el.title;
        let description = document.createElement("p");
        description.innerText = `Description: ${el.description}`;
        let category = document.createElement("h3");
        category.innerText = `Category: ${el.category.name}`;
        let price = document.createElement('h1');
        price.innerText = `Price: ${el.price}`;
        div.append(img,title,category,description,price);
        container.append(div);
    })
}


function sortLH(){
    let copy_data = data;
    copy_data = copy_data.sort(function(a,b){
        return a.price - b.price;
    });
    createPaginationButtons(copy_data);
    showPage(currentPage)
}

function sortHL(){
    let copy_data = data;
    copy_data = copy_data.sort(function(a,b){
        return b.price - a.price;
    });
    createPaginationButtons(copy_data);
    showPage(currentPage)
}
function sortAZ(){
    let copy_data = data;
    copy_data = copy_data.sort(function(a,b){
        if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
    });
    createPaginationButtons(copy_data);
    showPage(currentPage)
}
function sortZA(){
    let copy_data = data;
    copy_data = copy_data.sort(function(a,b){
        if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
          return 0;
    });
    createPaginationButtons(copy_data);
    showPage(currentPage)
}

function filter(){
    let query = document.getElementById("query").value;
    query = query.toLowerCase();
    console.log('query: ', query);
    let copy_data = data;
    copy_data = copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query);

    });
    console.log('copy_data: ', copy_data);
    appendProduct(copy_data)
    createPaginationButtons(copy_data);
    // showPage(currentPage)
}
