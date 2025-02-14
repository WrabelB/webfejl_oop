class Area{
    /**
     * @type {HTMLDivElement}
     */
    #div;
    /**
     * @returns {HTMLDivElement} // Visszater a div elemmel
     */
    get div(){
        return this.#div;
    }

    /**
     * @param {string} cssClass 
     */
    constructor(cssClass){ // Konstruktor ami a cssClass nevet kapja meg es letrehozza a div elemet a containerben
        const container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = cssClass;
        container.appendChild(this.#div);
    }

    /**
     * Letrehozza a container classal rendelkezo div elemet
     * amelyen belul a div lesz megtalalhato
     * Ha mar letezik a div, akkor azt adja vissza
     * @returns {HTMLDivElement} // Visszater a div elemmel
     */
    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement('div');
            container.className = ('container');
            document.body.appendChild(container);
        }
        return container;
    }
}

/**
 * Ez az osztaly tartalmazza a kerdeseket
 */
class QuestionArea extends Area{ // A QuestionArea az Area osztalybol szarmazik le
    constructor(cssClass){
        super(cssClass); // A superrel meghivjuk az ososztaly konstruktorat
    }
}

/**
 * Ez az osztaly tartalmazza a valaszokat
 */
class AnswerArea extends Area{ // Az AnswerArea az Area osztalybol szarmazik le
    constructor(cssClass){
        super(cssClass); // A superrel meghivjuk az ososztaly konstruktorat
    }
}