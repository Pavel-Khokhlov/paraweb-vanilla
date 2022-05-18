export default class CardsStore {
  static CARDS = [];
  static LIST_AUTHOR = [];
  setCards(cards) {
    // если автор неизвестен
    const checkedAuthor = cards.map((card) =>
      card.author === null ? (card = { ...card, author: "Unknown" }) : card
    );
    CardsStore.CARDS = checkedAuthor;
    // создание списка уникальных авторов
    CardsStore.LIST_AUTHOR = [
      ...new Set(checkedAuthor.map((i) => (i = i.author))),
    ];
  }
  getCards() {
    return CardsStore.CARDS;
  }
  getAuthors() {
    return CardsStore.LIST_AUTHOR;
  }
  defineAuthor(author) {
    return author === "All"
      ? CardsStore.CARDS
      : CardsStore.CARDS.filter((card) => card.author === author);
  }
}
