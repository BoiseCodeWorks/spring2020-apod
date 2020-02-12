export default class Apod {
  constructor(data) {
    this.title = data.title;
    this.explanation = data.explanation;
    this.url = data.hdurl;
  }

  get Template() {
    return `<h3>${this.title}</h3>
    <p>${this.explanation}</p>`;
  }
}
