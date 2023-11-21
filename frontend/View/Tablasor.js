class TablaSor{
    #lista = [];
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.tablaElem=szuloElem;
        this.tablaSorGen();
    }
    tablaSorGen() {
        let txt = '<tr>';
        for (const key in this.#lista) {
            txt += `<td>${this.#lista[key]}</td>`
        }
        txt += `<td><button type="button" class="szerkesz btn">🖍</button> <button type="button" class="torol btn">❌</button></td>`;
        txt += '</tr>';
        this.tablaElem.append(txt);
    }
}
export default TablaSor;