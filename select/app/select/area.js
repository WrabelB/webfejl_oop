class Area {
     #div;
     #manager;
     get div(){
         return this.#div;
     }

     get manager(){
            return this.#manager;
     }

     constructor(cssclass,manager){
        this.#manager = manager;
        const container = this.#getContainer()
        this.#div = document.createElement('div');
        this.#div.className = cssclass;
        container.appendChild(this.#div);
        this.manager.setFinishCallback(this.#finishCallback(container));
     }
    
     #finishCallback(containerDiv){
        return result => {
            containerDiv.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'result';
            div.textContent = result;
            containerDiv.appendChild(div);
        }
     }

     #getContainer(){
         let container = document.querySelector('.container')
         if(!container){
             container = document.createElement('div');
             container.className = 'container';
             document.body.appendChild(container);
         }
         return container;
     }
}

class DeckArea extends Area{

    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setNextCardCallback(this.#nextCardCallback());
    }

    #nextCardCallback(){
        return answer => {
            this.div.innerHTML = '';
            const skip = document.createElement('button');
            skip.addEventListener('click', this.#clickOnCardOrSkip());
            skip.textContent = 'skip';
            this.div.appendChild(skip);
            const cardElement = document.createElement('div');
            cardElement.textContent = answer;
            cardElement.className = 'largecard';
            cardElement.addEventListener('click', this.#clickOnCardOrSkip(answer));
            this.div.appendChild(cardElement);
        }
    }

    #clickOnCardOrSkip(answer){
        return () => { 
            this.manager.nextCard(answer) 
        }
    }
}


class SolutionArea extends Area{

    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setAppendCardToSolutionCallback(this.#appendToCardSolution());
    }
    #appendToCardSolution(){
        return answer => {
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = answer;
            this.div.appendChild(card);
        }
    }
}
