import "./sass/index.sass";

import PromoSlider from "./components/slider";

let nowDate = new Date();
const date =
  nowDate.getFullYear() +
  "/" +
  (nowDate.getMonth() + 1) +
  "/" +
  nowDate.getDate();

document.addEventListener("DOMContentLoaded", () => {
  // инициализация слайдера
  new PromoSlider(".slider", {
    loop: true,
    autoplay: true,
    interval: 3000,
    swipe: true,
  });
});

import Section from "./components/section.js";
import Card from "./components/card.js";
import { cardTemplate, cardsList, author } from "./utils/config";
import Api from "./components/api.js";
import CardsStore from "./components/store";
import Select from "./components/select";

const cardsStore = new CardsStore();

const catchErr = (res) => {
  alert(`Всё идёт не по плану. ${res.status}`);
};

// CONFIG API
const api = new Api({
  url: "https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc",
  headers: {
    "Content-Type": "application/json",
  },
});

const serverCardList = new Section(
  {
    renderer: (card) => {
      createCard(card);
    },
  },
  cardsList
);

function createCard(card) {
  const newCard = new Card(card, cardTemplate);
  const cardElement = newCard.generateCard();
  serverCardList.addItem(cardElement);
}

const getAllCards = () => {
  return api
    .getCards()
    .then((res) => res)
    .catch(catchErr);
};

Promise.all([getAllCards()])
  .then((res) => {
    const cardsArr = res.map(({ articles }) => articles)[0];
    cardsStore.setCards(cardsArr);
  })
  .then(() => serverCardList.renderCards(cardsStore.getCards()))
  .then(() => {
    const authorSelect = new Select(author, handleAuthor);
    authorSelect.initialzeSelect(cardsStore.getAuthors());
  })
  .then(() => console.log(cardsStore.getAuthors()))
  .catch(catchErr);

function handleAuthor(e) {
  e.preventDefault();
  console.log(e.target.value);
}


