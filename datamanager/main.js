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

const nameInput = document.createElement('input');
document.body.appendChild(nameInput);

nameInput.addEventListener('input', () => {
    dataManager.filterName(nameInput.value);
});

const ageInput = document.createElement('input');
ageInput.type = "number";
document.body.appendChild(ageInput);


ageInput.addEventListener('input', () => {
    const ageValue = Number(ageInput.value);
    dataManager.filterAge(ageValue);
});


