const products = [{id: 1, title: "Baby Yoda", content: "Фигурка малыша Йоды", price: 3999, img: "./images/BY.webp", hight: "160 мм" , weight: "1 кг", material: "ПВХ",  producer: "Николай Загородних"},
                  {id: 2, title: "Книга классная, поучительная", content: "Реально поучительная", price: 100, img: "./images/Book.webp", hight: "160 мм" , weight: "1 кг", material: "Резина",  producer: "FuRyu"},
                  {id: 3, title: "Чай", content: "Вкусный чай от Жириновского", price: 235, img: "./images/tea.webp", hight: "50 мм" , weight: "0.2 кг", material: "Суперские чайные листья, отвечаю",  producer: "Alter"},
                  {id: 4, title: "Уилл", content: 'Мини-фигурка Уилла из игры "Baldur`s Gate 3"', price: 1789, img: "./images/BG3.webp", hight: "100 мм" , weight: "0.5 кг", material: "АБС-пластик",  producer: "Good Smile Company"},
                  {id: 5, title: "Teto", content: "Лучший повар, сделает вам самый вкусный французский багет", price: 6700, img: "./images/Banner.webp", hight: "140 мм" , weight: "0.4 кг", material: "АБС, ПВХ",  producer: "FuRyu"},
                  {id: 6, title: "Багет из Франции", content: "Немного чёрствый, но всё же из Франции", price: 500, img: "./images/France.webp", hight: "300 мм" , weight: "0.8 кг", material: "Пшеница высшего сорта",  producer: "Apex"}
]

// дописать html по 5 пункту кр и добавить карточку


const params = new URLSearchParams(window.location.search);
const productID = Number(params.get("id"));
const product = products.find(id => id.id === productID);
//console.log(product.title);

const section = document.createElement("section");
section.classList.add("card-all-list");

const title = document.createElement("h1");
title.textContent = product.title;
title.classList.add("card-all-list__text-item");

const img = document.createElement("img");
img.src = product.img;
img.alt = product.title;
// img.width = 300;
img.classList.add("card-all-list__img");

const content = document.createElement("p");
content.textContent = product.content;
content.classList.add("card-all-list__text-item");

const price = document.createElement("p");
price.textContent = "Цена: " + product.price + "руб.";
price.classList.add("card-all-list__text-item");


// характеристики
const asideTitle = document.createElement("h2");
asideTitle.textContent = "Характеристики";
asideTitle.classList.add("card-all-list__text-item");

const aside = document.createElement("aside");
aside.classList.add("card-all-list__aside");

const hight = document.createElement("p");
hight.textContent = "Высота: " + product.hight;
hight.classList.add("card-all-list__text-item");

const weight = document.createElement("p");
weight.textContent = "Масса: " + product.weight;
weight.classList.add("card-all-list__text-item");

const material = document.createElement("p");
material.textContent = "Материал: " + product.material;
material.classList.add("card-all-list__text-item");

const producer = document.createElement("p");
producer.textContent = "Изготовитель: " + product.producer;
producer.classList.add("card-all-list__text-item");

const button = document.createElement("button");
button.textContent = "Купить";
button.classList.add("button", "button--primary", "product-card__button", "card-all-list__button");
button.dataset.product = product.id;
button.type = button;
// button.dataset.product = String(product.id);

aside.append(asideTitle, hight, weight, material, producer);
section.append(title, img, content, price, aside, button);

const point = document.querySelector("#card-all-list");
point.append(section);