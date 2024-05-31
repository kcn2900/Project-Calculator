function add(a, b) {
    function add(a, b) {
        const argArr = Array.from(arguments);
        // console.log(argArr)
        return argArr.reduce((total, curr) => total + curr, 0);
    }
}

function subtract(a ,b) {
    const argArr = Array.from(arguments);
    // console.log(argArr)
    return argArr.reduce((total, curr) => total - curr, 0);
}

function multiply(a, b) {
    const argArr = Array.from(arguments);
    // console.log(argArr)
    return argArr.reduce((total, curr) => total * curr, 0);
}

function divide(a, b) {
        const argArr = Array.from(arguments);
        // console.log(argArr)
        return argArr.reduce((total, curr) => total / curr);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            add(num1, num2);

    }
}

const screenText = document.querySelector(".screen");
screenText.addEventListener("click", (event) => {
    let choice = `${event.target.id}`;
    switch (choice) {
        
    }
});