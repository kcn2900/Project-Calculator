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
    return argArr.reduce((total, curr) => total * curr);
}

function divide(a, b) {
        const argArr = Array.from(arguments);
        // console.log(argArr)
        return argArr.reduce((total, curr) => total / curr);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return add(num1, num2);
    }
}

function setUp(arr) {
    console.log(arr);
    arr = arr.filter((item) => item !== "" && item !== "\n");
    console.log(arr);
    const OPERATORS = ["+", "-", "*", "/"];
    if (OPERATORS.includes(arr[0]) || (!Array.isArray(arr) || !arr.length))
        return "SYNTAX ERROR";
    let left = +arr[0];
    let currOperator = "";
    for (let i = 1; i < arr.length; i++) {
        // i+2 < arr.length
        // grab operator, grab rhs, return to lhs
        if (i % 2 !== 0) {
            currOperator = arr[i];
        }
        else {
            let right = +arr[i];
            console.log(`left: ${left}, \nright: ${right}, \nop: ${currOperator}
            \ntype-left: ${typeof left}, \ntype-right: ${typeof right}`)
            left = operate(currOperator, left, right);
            // console.log(left)
        }
    }
    return left;
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
            // console.log(setUp(screenText.textContent.split(" ")));
            screenText.textContent = setUp(screenText.textContent.split(" "));
            return;
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