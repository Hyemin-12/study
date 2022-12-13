class Calculator {
    constructor(display) { 
        this.display = display
        this.content = ''
        this.opChecked = true
    }    

    init() {
        this.opChecked = true
        this.content = ''
    }

    addNum(n) {
        this.opChecked = false
        this.content += n
    }
    
    addOp(op) {
        if(this.opChecked) return
        this.opChecked = true
        this.content += op
    }

    redo() {
        this.content = '0'
    }

    undo() {
        this.opChecked = true
        this.content = String(this.content).slice(0, -1)
    }

    calculate() {
        if (this.opChecked) return
        this.content = Math.round(eval(this.content)*1000)/1000
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
            calculator.init()
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