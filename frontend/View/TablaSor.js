class TablaSor {
    #lista = [];
    constructor(lista, tablaElem) {
        this.#lista = lista;
        this.tablaElem = tablaElem;
        this.tablaSorGen();
    }

    tablaSorGen() {
        let txt = '<tr>';
        for (const key in this.#lista) {
            if (key !== "created_at" && key !== "updated_at") {
                txt += `<td>${this.#lista[key]}</td>`;
            }
        }
        txt += `<td><button type="button" class="megj btn btn-primary">Megjelenit</button></td>`;
        txt += `<td><button type="button" class="szerk btn">✏</button> <button type="button" class="torol btn">❌</button></td>`;
        txt += '</tr>';
        let sor = $(txt);
        this.tablaElem.append(sor);
        this.torol(sor);
    }

    torol(sor) {
        sor.find('.torol').on('click', () => {
            const torolEvent = new CustomEvent("torol", { detail: this.#lista.id });
            window.dispatchEvent(torolEvent);
            sor.remove();
        });
    }
}

export default TablaSor;
