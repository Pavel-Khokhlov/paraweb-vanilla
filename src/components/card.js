import {
  cardContainer,
  cardTitle,
  cardText,
  cardAuthor,
  cardDate,
} from "../utils/config";

export default class Card {
  static MONTH = [
    "яиваря",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  constructor(item, selector) {
    this._title = item.title;
    this._text = item.description;
    this._author = item.author;
    this._date = item.publishedAt;
    this._selector = selector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(cardContainer)
      .cloneNode(true);
    return cardElement;
  }

  // Преобразование месяца из числа в текст
  _changeMonth(m) {
    return Card.MONTH[m - 1];
  }

  // Преобразование даты в карточке
  _exchangeDate(d) {
    const date = d.substr(0, 10); // удаляем часть строки
    const dateArr = date.split("-"); // делаем массив даты
    const newMonth = this._changeMonth(Number(dateArr[1])); // возвращаем писменный вид месяца
    return `${dateArr[2]} ${newMonth} ${dateArr[0]}`;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(cardTitle).textContent = this._title;
    this._element.querySelector(cardText).textContent = this._text;
    this._element.querySelector(cardAuthor).textContent = this._author;
    this._element.querySelector(cardDate).textContent = this._exchangeDate(
      this._date
    );
    return this._element;
  }
}
