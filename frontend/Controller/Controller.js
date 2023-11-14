import DataService from "../Model/DataService.js";
class Controller{
    constructor(){
        this.dataService= new DataService();

        this.dataService.getAxiosData('api/writers',this.megjelenit);
        this.dataService.postAxiosData('api/writers',{
            nev:"Jenő",
            szul: 1666,
        });
        this.dataService.putAxiosData('api/writers',{
            id:1,
            nev:"Átírt József Attila",
            szul: 1905,
        });
        this.dataService.getAxiosData('api/writers',15);
    }

    megjelenit(list){
        console.log(list);
    }
}
export default Controller;