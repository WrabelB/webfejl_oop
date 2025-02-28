/**
 * @callback NextQuestionCallBack
 * @param {string} kerdes a kerdes szoveget tartalmazza
 * 
 * @callback NextAnswersCallBack
 * @param {string[]} valasz a valaszokat tartalmazza
 * 
 * @callback FinishCallBack
 * @param {string} result a vegeredmeny szoveget tartalmazza
 */
class Manager {
    /**
     * @type {Question[]}
     */
    #array

    /**
     * @type {number} az aktualis kerdes szamat tartalmaza
     */
    #currentQuestionNumber

    /**
     * @type {Object} a kerdesszamonkent eltarolt valaszokat tartalmazza
     */
    #selectedAnswers

    /**
     * @type {NextQuestionCallBack}
     */
    #nextQuestionCallBack

    /**
     * @type {NextAnswersCallBack}
     */
    #nextAnswersCallBack

    /**
     * @type {FinishCallBack}
     */
    #finishCallBack

    /**
     * 
     * @param {Question[]?} array kerdestomb
     */
    constructor(array = []) {
        this.#array = array
        this.#currentQuestionNumber = 0
        this.#selectedAnswers = {}
    }

    /**
     * 
     * Beallitja a kovetkezo kerdes betoltesekor a kerdeshez tartozo logikat
     * 
     * @param {NextQuestionCallBack} callback tartalmazza a fuggvenyt, ami akkor fut le 
     * amikor a kovetkezo kerdesre lepunk 
     */
    setNextQuestionCallBack(callback) {
        this.#nextQuestionCallBack = callback
    }

    /**
     * 
     * Beallitja a kovetkezo vakaszk betoltesekor lefuto logikat
     * 
     * @param {NextAnswersCallBack} callback tartalmazza a fuggvenyt, ami
     * lefut a kovetkezo valaszra lepeskor 
     */
    setNextAnswersCallBack(callback) {
        this.#nextAnswersCallBack = callback
    }

    /**
     * 
     * Beallitja az eredmeny kiertekelesehez szukseges fugvenyt
     * 
     * @param {FinishCallBack} callback tartalmazza a fuggvenyt, ami lefut amikor
     * vegigerunk a kerdesekem 
     */
    setFinishCallBack(callback) {
        this.#finishCallBack = callback
    }

    nextQuestion(answer) {
        this.#selectedAnswers[this.#currentQuestionNumber] = answer // taroljuk a valasz erteket
        this.#currentQuestionNumber++
        if(this.#currentQuestionNumber < this.#array.length) { // van e meg kerdes
            const nextQuestion = this.#array[this.#currentQuestionNumber]
            this.#nextQuestionCallBack(nextQuestion.questionText)
            this.#nextAnswersCallBack(nextQuestion.answers)
        } else {
            let counter = 0
            for(const index in this.#array) {
                if(this.#array[index].rightAnswer === this.#selectedAnswers[index]) {
                    counter++ // akkor noveljuk a counter ha a rightAnswer megegyezi a tarolttal
                }
            }
            const result = `A kerdessor veget ert: ${this.#array.length}/${counter}`
            this.#finishCallBack(result)
        }
    }

    /**
     * Megjeleniti az elso kerdest es a valaszokat
     */
    start() {
        this.#nextQuestionCallBack(this.#array[0].questionText)
        this.#nextAnswersCallBack(this.#array[0].answers)
    }
}