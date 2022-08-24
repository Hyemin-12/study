class Calculator {
    constructor(display) { 
        this.display = display
        this.content = ''
    }    

    addNum(n) {
        this.content += n
    }
    
    addOp(op) {
        this.content += op
    }

    redo() {
        this.content = ''
    }

    undo() {
        this.content = String(this.content).slice(0, -1)
    }

    calculate() {
        this.content = eval(this.content)
    }

    result() {
        this.display.value = this.content
    }
}

const buttons = document.querySelectorAll('button')
const display = document.querySelector('input')
const calculator = new Calculator(display)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'operator') {
            calculator.addOp(button.innerText)
            calculator.result()
        } else if (button.className === 'redo') {
            calculator.redo()
            calculator.result()
        } else if(button.className === 'res') {
            calculator.calculate()
            calculator.result()
        } else if(button.className === 'undo') {
            calculator.undo()
            calculator.result()
        } else {
            calculator.addNum(button.innerText)
            calculator.result()
        }
    })      
})