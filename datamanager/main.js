/**
 * @typedef {{nev: String, eletkor: Number}} Person
 * 
 * @callback Updatecallback
 * @param {Person[]} persons
 * @returns {void}
 */
class DataManager{
    /**
     * @type {Person[]}
     */
    #array;

    /**
     * @type {Updatecallback}
     */
    #updatecallback;

    /**
     * 
     * @param {Person[]} array 
     */
    constructor(array= []){
        this.#array = array;

        this.#updatecallback = () => [];
    }

    /**
     * @param {Updatecallback} callback
     */
    setUpdatecallback(callback){
        this.#updatecallback = callback;
        this.#updatecallback(this.#array);
    }

    /**
     * 
     * @param {Person} Person 
     */
    addDatamanager(person){
        this.#array.push(person);
        this.#updatecallback(this.#array);
    }

    /**
     * 
     * @param {string} name 
     */
    filterName(name) { // A megadott nev alapjan szuri az adatokat és frissiti a megjelenitest.
        const result = [];
        for (const person of this.#array) {
            if (person.nev.includes(name)) {
                result.push(person);
            }
        }
        this.#updatecallback(result);
    }

    /**
     * 
     * @param {number} age 
     */
    filterAge(age) { // Az adott eletkorhoz tartozo szemelyeket keresi meg es frissiti a tabalzatot.
        const result = [];
        for (const person of this.#array) {
            if (person.eletkor === age) {
                result.push(person);
            }
        }
        this.#updatecallback(result);
    }

    
    filter(filterCallback){ // A filter fuggvenyben megadott feltetel alapjan szuri az adatokat es frissiti a tablazatot.
        const result = [];
        for (const person of this.#array) {
            if (filterCallback(person)) { // A filterCallback fuggvenyben megadott feltetel alapjan szuri az adatokat es frissiti a tablazatot.
                result.push(person);
            }
        }
        this.#updatecallback(result);
    }
}



class DataTable{
    

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody;

    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){
        const table = document.createElement('table');
        document.body.appendChild(table);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        this.#tbody = tbody;

        dataManager.setUpdatecallback((persons) => this.#renderTable(persons)); 
        //setUpdatecallback függvényt hivjuk meg a DataManageren, es atadunk neki egy fuggvenyt, amely a #renderTable metodust hivja meg a frissitett adatokkal. 
        // Ez miatt minden valtozas utan automatikusan frissul a tablazat.
        // A persons tarolja az aktualisan megjelenito szemelyeket tarolo tombot (Person[]).
    }   


    // Privat renderTable letrehozasa

    /**
     * @param {Person[]} persons
     */

    #renderTable(persons) { // Letrehoztam a renderTable fuggvenyt, amivel megjelenitem a tablazatot
        this.#tbody.innerHTML = "";
        for (const x of persons) {
            const tr = document.createElement('tr');
            this.#tbody.appendChild(tr);

            const td = document.createElement('td');
            td.innerHTML = x.nev;
            tr.appendChild(td);

            const td1 = document.createElement('td');
            td1.innerHTML = x.eletkor;
            tr.appendChild(td1);
            
        }
    }
}
const dataManager = new DataManager([{nev: 'Józsi', eletkor: 17}, {nev: 'Feri', eletkor: 16}, {nev: 'Gomszab', eletkor: 37}]);
console.log(dataManager);
const datatable = new DataTable(dataManager);

// Input mezok letrehozasa es event listenerek

const nameInput = document.createElement('input'); // Letrehozom az input mezot
document.body.appendChild(nameInput);

nameInput.addEventListener('input', () => { // Az input mezoben megadott nev alapjan szuri az adatokat es frissiti a tablazatot.
    dataManager.filterName(nameInput.value);
});

const ageInput = document.createElement('input'); // Letrehozom az input mezot
ageInput.type = "number";
document.body.appendChild(ageInput);


ageInput.addEventListener('input', () => { // Az input mezoben megadott eletkor alapjan szuri az adatokat es frissiti a tablazatot.
    const ageValue = Number(ageInput.value);
    dataManager.filterAge(ageValue);
});

const input = document.createElement('input');
input.type = "file";
document.body.appendChild(input);
input.addEventListener('change', (e) => { // A fajl beolvasasa utan a fajl tartalmat soronkent feld
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => { // A beolvasott fajl tartalmat soronkent feldaraboljuk es a kapott tomb elemeit beletesszuk a szemelyeket tarolo tombbe.
        const filecontent = reader.result;
        const split = filecontent.split('\n');
        
        for (const elem of split) { // A split tomb elemeit feldaraboljuk a pontosvesszok menten es letrehozunk egy szemely objektumot.
            const splitTomb = elem.split(';');
            const person = {
                nev: splitTomb[0], 
                eletkor: Number(splitTomb[1])}; // A splitTomb 0. es 1. elemet a nev es eletkor ertekekkent taroljuk.
            dataManager.addDatamanager(person); // A letrehozott szemely objektumot hozzaadjuk a szemelyeket tarolo tombhoz.
        }
    };
});