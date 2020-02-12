import store from "../store.js";
import Apod from "../Models/Apod.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  timeout: 3000
});

class ApodService {
  getApod() {
    _api
      .get("apod?api_key=Mo7Z9DNtJCgakdJ7nJEyFND1ehZ6yOTrLmbQZQxM")
      .then(res => {
        let picData = new Apod(res.data);
        store.commit("apod", picData);
      });
  }
  getApodDay(date) {
    _api
      .get("apod?api_key=Mo7Z9DNtJCgakdJ7nJEyFND1ehZ6yOTrLmbQZQxM&date=" + date)
      .then(res => {
        let picData = new Apod(res.data);
        store.commit("apod", picData);
      });
  }
}

const service = new ApodService();
export default service;
