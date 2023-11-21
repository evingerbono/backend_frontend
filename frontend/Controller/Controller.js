import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";
class Controller{
    constructor(){
        this.dataService= new DataService();

        this.dataService.getData('api/writers',this.megjelenit);

        

    }

    megjelenit(list){
        console.log(list);
        new TablaView(list,$('.tablazat'));
    }
}
export default Controller;