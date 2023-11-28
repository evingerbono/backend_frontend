import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";
import Urlap from "../View/UrlapView.js";
import Konyv from "../View/KonyvView.js";

class Controller {
  constructor() {
    this.dataService = new DataService();

    this.dataService.getData("api/writers", this.megjelenit);

    $(window).on("torol", (event) => {
      console.log(event.detail);
      this.dataService.deleteData("api/writers/" + event.detail);
    });

    new Urlap($(".urlap"));
    
    $(".urlap").on("submit", (event) => {
      event.preventDefault();
      const ujAdat = {
        nev: $("#nev").val(),
        szul: $("#szul").val(),
      };
      this.dataService.postData("api/writers", ujAdat);
    });

    $(window).on("megj", (event) => {
      console.log(event.detail);
      this.dataService.getData("api/books", this.megjelenitKonyv);
    });

  }

  megjelenitKonyv(list){
    new Konyv(list,$('.konyv'))
  }

  megjelenit(list) {
    console.log(list);
    new TablaView(list, $(".tablazat"));
  }
}

export default Controller;
