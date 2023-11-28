import TablaSor from "./TablaSor.js";

class TablaView {
  #lista = [];
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.szuloElem.html('<table class="table table-bordered"><thead><tr><th>Id</th><th>Név</th><th>Születési év</th><th>Könyv</th></tr></thead><tbody></tbody></table>');
    this.tabla = this.szuloElem.children('table');
    this.tablaMegj();
  }

  tablaMegj() {
    for (const key in this.#lista) {
      new TablaSor(this.#lista[key], this.tabla);
    }
  }
}
export default TablaView;