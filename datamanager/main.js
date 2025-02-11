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

    orderByName() {  // A szemelyeket tarolo tombot rendezzuk nev szerint es frissitjuk a tablazatot.
        const sorted = this.#array.slice();
        for (let i = 0; i < sorted.length - 1; i++) {
            for (let j = i + 1; j < sorted.length; j++) {
                if (sorted[i].nev.localeCompare(sorted[j].nev) > 0) { // A tomb elemeit vegigjarjuk es a nev szerint rendezzuk oket. 
                // A localeCompare() metodus a stringeket osszehasonlitja es visszaadja a kulonbseget. Vagyis ha az elso string nagyobb, mint a masodik, 
                // akkor pozitiv erteket ad vissza, ha egyenlo, akkor 0-t, ha kisebb, akkor negativ erteket.
                    let temp = sorted[i];
                    sorted[i] = sorted[j];
                    sorted[j] = temp;
                }
            }
        }
        this.#updatecallback(sorted);
    }

    orderByAge() { // A szemelyeket tarolo tombot rendezzuk eletkor szerint es frissitjuk a tablazatot.
        const sorted = this.#array.slice(); //
        for (let i = 0; i < sorted.length - 1; i++) { // A tomb elemeit vegigjarjuk es az eletkor szerint rendezzuk oket.
            for (let j = i + 1; j < sorted.length; j++) {
                if (sorted[i].eletkor > sorted[j].eletkor) { // A tomb elemeit vegigjarjuk es az eletkor szerint rendezzuk oket.
                    let temp = sorted[i];
                    sorted[i] = sorted[j];
                    sorted[j] = temp;
                }
            }
        }
        this.#updatecallback(sorted);
    }

    order(x) { // A szemelyeket tarolo tombot rendezzuk az x fuggveny szerint es frissitjuk a tablazatot.
        const sorted = this.#array.slice();
        for (let i = 0; i < sorted.length - 1; i++) { // -1-rol inditjuk, mert az utolso elemet nem kell vizsgalni, mert az mar a helyen van.
            for (let j = i + 1; j < sorted.length; j++) {
                if (x(sorted[i], sorted[j]) > 0) {
                    let temp = sorted[i];
                    sorted[i] = sorted[j];
                    sorted[j] = temp;
                }
            }
        }
        this.#updatecallback(sorted);
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
        const table = document.createElement('table'); // Letrehozom a tablazatot
        document.body.appendChild(table);

        const thead = document.createElement('thead'); // Letrehozom a fejleceket
        table.appendChild(thead);

        const headerRow = document.createElement('tr'); // Letrehozom a fejlec sorokat
        thead.appendChild(headerRow);

        const nevHdr = document.createElement('th'); // Letrehozom a nev fejleceket
        nevHdr.textContent = "Név";
        nevHdr.addEventListener('click', () => dataManager.orderByName()); // A nev fejlec kattintasara meghivja az orderByName metodust.
        headerRow.appendChild(nevHdr);

        const eletkorHdr = document.createElement('th'); // Letrehozom az eletkor fejleceket
        eletkorHdr.textContent = "Életkor";
        eletkorHdr.addEventListener('click', () => dataManager.orderByAge()); // Az eletkor fejlec kattintasara meghivja az orderByAge metodust.
        headerRow.appendChild(eletkorHdr);

        const tbody = document.createElement('tbody'); // Letrehozom a tablazat tartalmat
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