class Manager{
    /**
     * @type {Question[]} // A managerArray tombben Question tipusu elemek lesznek
     */
    #array;

    /**
     * @type {number} // A jelenlegi kerdes
     */
    #currentQuestionNumer;

    /**
     * @type {Object} // A kerdes szamonkent tartalmazza a valaszokat
     */
    #selectedAnswer;

    
    /**
     * Megjeleniti a kovetkezo kerdest
     */
    start(){
        this.#nextQuestionCallBack(this.#array[0].questionText)
        this.#nextQuestionCallBack(this.#array[0].answers)
    }
}

