const dataAddres = "https://norma.nomoreparties.space/api/ingredients";

export default class Api {
  static async getData() {
    const res = await fetch(dataAddres);
    const data = await res.json();
    return data.data;
  }
}
