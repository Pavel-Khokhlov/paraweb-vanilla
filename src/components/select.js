export default class Select {
  constructor(selector, handleChange) {
    this._selectEl = document.querySelector(selector);
    this._handleChange = handleChange;
  }

  initialzeSelect(arr) {
    arr.forEach((i) => {
      console.log(i);
      this._option = document.createElement("option");
      this._option.value = i;
      this._option.innerText = i;
      return this._selectEl.append(this._option);
    });
    this._setEventListener(this._selectEl);
  }

  _setEventListener(el) {
    el.onchange = this._handleChange;
  }
}
