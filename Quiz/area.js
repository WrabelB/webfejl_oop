class Area {
    /**
     * @type {HTMLDivElement}
     */
    #div

    /**
     * @returns {HTMLDivElement} visszater az aktualis terulettel, 
     * ami azelemeket tartalmazza
     */
    get div() {
        return this.#div
    }

    /**
     * @param {Manager} manager
     * @param {string} cssClass 
     */
    constructor(cssClass, manager) {
        const container = this.#getCotainer()
        this.#div = document.createElement('div')
        this.#div.className = cssClass
        container.appendChild(this.#div)
        manager.setFinishCallBack(resultText => {
            container.innerHTML = ''
            const resultDiv = document.createElement('div')
            resultDiv.textContent = resultText
            resultDiv.classList = 'result'
            container.appendChild(resultDiv)
        })
    }

    /**
     * Letrehozza a container classal rendelkezo elemet
     * amelyen belul a div lesz megtalalhato
     * Ha mar letezik, akkor a mar letezot adja vissza
     * 
     * @returns {HTMLDivElement} containert tartalmazza 
     */
    #getCotainer() {
        let container = document.querySelector(".container")
        if(!container) {
            container = document.createElement('div')
            container.className = 'container'
            document.body.appendChild(container)
        }
        return container
    }

}

/**
 * Ez a terulet fogja tartalmazni a kerdest
 */
class QuestionArea extends Area{
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager) {
        super(cssClass, manager) // az os class konstruktorat hivja meg
        manager.setNextQuestionCallBack((kerdesszoveg) => {
            this.div.innerHTML = ''
            const quCard = document.createElement('div')
            quCard.textContent = kerdesszoveg
            this.div.appendChild(quCard)
        })
    }
}

/**
 * Ez a terulet fogja tartalmazni a valaszt
 */
class AnswerArea extends Area {
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager) {
        super(cssClass, manager)
        manager.setNextAnswersCallBack((valaszok) => {
            this.div.innerHTML = ''
            for(const valasz of valaszok) {
                const answerCard = document.createElement('div')
                answerCard.className = 'item'
                answerCard.textContent = valasz
                answerCard.addEventListener('click', () => {
                    manager.nextQuestion(valasz)
                })
                this.div.appendChild(answerCard)
            }
        })
    }
}