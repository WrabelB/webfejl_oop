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
    filterName(name){
        const result = [];

        for(const elem of this.#array){
            if(elem.nev.includes(name) === name)
                result.push(name)
        };
        this.#updatecallback(result);
    }

    /**
     * 
     * @param {number} age 
     */
    filterAge(age){
        const result = [];

        for(const elem of this.#array){
            if(elem.eletkor === age)
                result.push(age)
        };
        this.#updatecallback(result);
    }
}


class DataTable{
    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){
        const table = document.createElement('table');
        document.body.appendChild(table);

        const tbody = document.createElement('tbody');
        document.body.appendChild(tbody);
    }
}
