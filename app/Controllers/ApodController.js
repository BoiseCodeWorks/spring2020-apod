import ApodService from "../Services/ApodService.js";
import store from "../store.js";

//Private
function _draw() {
  let apod = store.State.apod;
  document.getElementById("info").innerHTML = apod.Template;
  document.querySelector("body").style.backgroundImage = `url(${apod.url})`;
}

//Public
export default class ApodController {
  constructor() {
    store.subscribe("apod", _draw);

    ApodService.getApodDay("2020-01-03");
  }
}
