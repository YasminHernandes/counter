(() => {
    const minusButton = document.querySelector(".minus-button")
    const plusButton = document.querySelector(".plus-button")
    const counterValue = document.querySelector(".counter-value")
    const resetButton = document.querySelector(".reset")

    counterButtonHandler = operation => {
        let counterCurrentValue = +counterValue.innerHTML
        switch (operation) {
            case "-":
                counterCurrentValue--
                if(counterCurrentValue >= 0) {
                    counterValue.innerHTML = counterCurrentValue
                }
                break;
            case "+":
                counterCurrentValue++
                counterValue.innerHTML = counterCurrentValue
                break;
            case "*":
                counterValue.innerHTML = 0
            default:
                break;
        }
    }

    minusButton.addEventListener('click', () => counterButtonHandler("-"))
    plusButton.addEventListener('click', () => counterButtonHandler("+"))    
    resetButton.addEventListener('click', () => counterButtonHandler("*"))
})()