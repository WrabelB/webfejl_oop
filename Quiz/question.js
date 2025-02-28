/**
 * Ezzel az entitassal fog dolgozni a manager osztalyunk
 * (a manager tmobje ezeket fogja tartalmazni)
 */
class Question {
    /**
     * @type {string}
     */
    #questionText

    /**
     * @type {string[]}
     */
    #answers

    /**
     * @type {string}
     */
    #rightAnswer

    /**
     * @returns {string[]} a valaszokat tartalmazza
     */
    get answers() {
        return this.#answers 
    }

    /**
     * @returns {string} a kerdes a szoveget tartalmazza
     */
    get questionText() {
        return this.#questionText
    }

    /**
     * @returns {string} a jo valasz szoveget tartalazza
     */
    get rightAnswer() {
        return this.#rightAnswer
    }

    /**
     * 
     * @param {string} questionText 
     * @param {string[]} answers 
     * @param {string} rightAnswer 
     */
    constructor(questionText, answers, rightAnswer) {
        this.#answers = answers
        this.#questionText = questionText
        this.#rightAnswer = rightAnswer
    }
}