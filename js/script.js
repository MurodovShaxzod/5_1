let menuContainer = document.querySelector(".main-container");
let nav = document.querySelector('nav');
let menu = document.querySelectorAll(".menu div");
let search = document.querySelector(".header-search");

let ordersContent = document.querySelector(".orders-content");

for (let i = 0; i < menu.length; i++) {
  for (let j = 0; j < menu.length; j++) {
    menu[i].addEventListener('click', () => {
      menu[j].classList.remove('menu-active');
      menu[i].classList.add('menu-active');
    });
  };
};

let navbarItem = document.querySelectorAll(".nav-ul li");
for (let i = 0; i < navbarItem.length; i++) {
  for (let j = 0; j < navbarItem.length; j++) {
    navbarItem[i].addEventListener("click", () => {
      navbarItem[j].classList.remove("nav-active");
      navbarItem[i].classList.add("nav-active");
    });
  };
};

search.addEventListener("input", searchFilter);
nav.addEventListener("click", navbarItemFilter)

let menuContent = [
  { image: "img/image 4.png", text: "Spicy seasoned seafood noodles", price: "2.29", description: "20 Bowls available", menuFood: "Grill" },
  { image: "img/image 2.png", text: "Salted Pasta with mushroom sauce", price: "2.69", description: "11 Bowls available", menuFood: "Appetizer" },
  { image: "img/image 3.png", text: "Beef dumpling in hot and sour soup", price: "2.99", description: "16 Bowls available", menuFood: "Soup" },
  { image: "img/image 5.png", text: "Healthy noodle with spinach leaf", price: "3.29", description: "22 Bowls available", menuFood: "Cold Dishes" },
  { image: "img/image 5.png", text: "Hot spicy fried rice with omeletf", price: "3.49", description: "13 Bowls available", menuFood: "Grill" },
  { image: "img/image 6.png", text: "Spicy instant noodle with special omelette", price: "3.59", description: "17 Bowls available", menuFood: "Grill" },
  { image: "img/image 6.png", text: "HERING SALAT 200g", price: "2.59", description: "15 Bowls available", menuFood: "Appetizer" }
];

function menuContentFunc() {
  menuContent.forEach((item) => {
    let row = document.createElement("div");
    row.className = "main-content";
    row.innerHTML = `
    <div class="main-content-img">
      <img src="${item.image}" alt="img">
    </div>
    <div class="main-content-title">
      <h3 class="main-content-text">${item.text}</h3>
      <p class="main-content-price">$ <span>${item.price}</span></p>
      <p class="main-content-description">${item.description}</p>
    </div>
    `
    menuContainer.append(row);
  })
}

function navbarItemFilter(e) {
  for (let i = 0; i < menuContent.length; i++) {
    document.querySelectorAll(".main-content-title").forEach((item) => {
      let todo = menuContent[i].menuFood;
      switch (e.target.textContent) {
        case "Hot Dishes":
            item.parentNode.style.display = "grid";
          break;
        case "Cold Dishes":
          if (todo == "Cold Dishes") {
            item.parentNode.style.display = "grid";
          } else {
            item.parentNode.style.display = "none";
          }
          break;
        case "Soup":
          if (todo == "Soup") {
            item.parentNode.style.display = "grid";
          } else {
            item.parentNode.style.display = "none";
          }
          break;
        case "Grill":
          if (todo == "Grill") {
            item.parentNode.style.display = "grid";
          } else {
            item.parentNode.style.display = "none";
          }
          break;
        case "Appetizer":
          if (todo == "Appetizer") {
            item.parentNode.style.display = "grid";
          } else {
            item.parentNode.style.display = "none";
          }
          break;
        case "Dessert":
          if (todo == "Dessert") {
            item.parentNode.style.display = "grid";
          } else {
            item.parentNode.style.display = "none";
          }
          break;
      }
    })
  }
}

function searchFilter(e) {
  let searchTrem = e.target.value;
  document.querySelectorAll(".main-content-title").forEach((item) => {
    let textValue = item.querySelector(".main-content-text").textContent;
    if (textValue.includes(searchTrem)) {
      item.parentNode.style.display = 'block';
    } else {
      item.parentNode.style.display = 'none';
    }
  });
}


// function ordersContentFunc() {
//   menuContent.forEach((item) => {
//     mainContentTitles.forEach((i) => {
//       i.addEventListener("click", () => {
//         // document.querySelector(".orders-section").style.display = "block"
//         let row = document.createElement("div");
//         row.innerHTML = `
//         <div class="orders-content-title">
//           <div class="orders-content-img"><img src="${item.image}" alt="img"></div>
//           <div class="orders-content-text">
//             <h3>${item.text}</h3>
//             <span>$ ${item.price}</span>
//           </div>
//           <p class="qty">0</p>
//           <p class="order-price">$ 4,58</p>
//         </div>
//         <div class="delete-content">
//           <input type="text" placeholder="Please, just a little bit spicy only.">
//           <button type="button" class="delete-btn"><i class='bx bx-trash-alt'></i></button>
//         </div>
//     `
//         ordersContent.append(row);
//       })
//     })
//   })
// }

// ordersContentFunc();

menuContentFunc();
