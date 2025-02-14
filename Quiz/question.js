/**
 * Ezzel entitassal fog dolgozn a manager osztaly.
 */
class Question {
    /**
     * @param {string} questionText
     */
    #questionText;

    /**
     * @param {string[]} 
     */
    #answers;

    /**
     * @param {string} 
     */
    #rightAnswer;

    /**
     * @returns {string[]} valaszokat tatlamazo tomb
     */
    get answers(){
        return this.#answers;
    }

    /**
     * @returns {string} a kerdes szoveget adja vissza
     */
    get questionText(){
        return this.#questionText;
    }

    /**
     * @returns {string} a helyes valaszt adja vissza
     */
    get rightAnswer(){
        return this.#rightAnswer;
  }

  /**
   * 
   * @param {string} questionText 
   * @param {string[]} answers 
   * @param {string} rightAnswer 
   */
  constructor (questionText, answers, rightAnswer){
      this.#questionText = questionText;
      this.#answers = answers;
      this.#rightAnswer = rightAnswer;
  }
}