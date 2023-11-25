class Urlap {
    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.urlapGen();
    }

    urlapGen() {
        let txt = '<form class="p-3" id="ujAdatForm">';
        txt += '<div class="mb-3">';
        txt += '<label for="nev" class="form-label"></label>';
        txt += '<input type="text" id="nev" name="nev" class="form-control" placeholder="Írd ide a neved">';
        txt += '</div>';
        txt += '<div class="mb-3">';
        txt += '<label for="szul" class="form-label"></label>';
        txt += '<input type="number" id="szul" name="szul" class="form-control" placeholder="Szül">';
        txt += '</div>';
        txt += '<button type="submit" class="btn btn-primary">Küldés</button>';
        txt += '</form>';

        this.szuloElem.append(txt);
    }
}

export default Urlap;
