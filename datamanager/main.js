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
    }

    /**
     * 
     * @param {string} name 
     */
    filterName(name){
        const result = [];

        for(const elem of this.#array){
            if(elem.nev === name)
                result.push(name)
        };
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
    }
}