class Konyv {

    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.konyvMegjelenit();
    }

    konyvMegjelenit(book) {
        let txt = `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${book.cim}</h5>
                    <p class="card-text">Szerző: ${book.writer}</p>
                    <p class="card-text">Megjelenés: ${book.kelt}</p>
                    <p class="card-text">Kiadó: ${book.kiado}</p>
                </div>
            </div>`;
        this.szuloElem.append(txt);
    }

}
export default Konyv;