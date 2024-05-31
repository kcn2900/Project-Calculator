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

function setUp(arr) {
    const OPERATORS = ["+", "-", "*", "/"]
    if (OPERATORS.includes(arr[0]))
        return "SYNTAX ERROR";
    // idea is to take curr left operand
    // check for operator
    // check and use right operand
}

const screenText = document.querySelector(".screen");
const calcBtn = document.querySelector(".bottom");

calcBtn.addEventListener("click", (event) => {
    let choice = `${event.target.id}`;
    switch (choice) {
        case "multiply":
            choice = " *";
            break;
        case "divide":
            choice = " /";
            break;
        case "add":
            choice = " +";
            break;
        case "subtract":
            choice = " -";
            break;
        case "equal":
            choice = ""
            break;
        case "dot":
            choice = "."
            break;
        case "sign":
            choice = "-"
            break;
        default:
            choice = ` ${choice}`
    }
    
    if (choice === " clear")
        screenText.textContent = "";
    else {
        screenText.textContent += choice;
    }
});