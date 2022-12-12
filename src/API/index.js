const dataAddres = "https://norma.nomoreparties.space/api/ingredients";

export default class Api {
  static async getData(setMethod) {
    fetch(dataAddres)
      .then((res) => res.json())
      .then((data) => setMethod(data.data))
      .catch((err) => {
        console.log(`Произошла ошибка - ${err.message}`);
      });
  }
}
