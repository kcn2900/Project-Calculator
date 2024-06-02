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
        if (b == 0) {
            return "Why?";
        }
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
    const OPERATORS = ["+", "-", "*", "/"];
    if (OPERATORS.includes(arr[0]) || (!Array.isArray(arr) || !arr.length)
    || arr.length < 3)
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
            if (left === "Why?")
                return "Don't divide by zero >:(";
            // console.log(left)
        }
    }
    return left;
}

function checkDuplicates(arr) {
    let filtered = arr.filter((item) => item.split(".").length < 2
|| item.split("-").length < 2);
if (filtered.length === arr.length)
    return true;
return false;
}

const screenText = document.querySelector(".screen");
const calcBtn = document.querySelector(".bottom");

calcBtn.addEventListener("click", (event) => {
    if (screenText.textContent === "SYNTAX ERROR" ||
        screenText.textContent === "Don't divide by zero >:(")
        screenText.textContent = "";
    let arr = screenText.textContent.split(" ")
        .filter((item) => item !== "" && item !== "\n");
    console.log(arr);
    // if (arr.length+1 % 3 == 0 && arr.length != 0) {
    //     console.log(`check: ${arr}`);
    //     screenText.textContent = setUp(arr);
    // }
    let choice = `${event.target.id}`;
    switch (choice) {
        case "multiply":
            choice = " * ";
            break;
        case "divide":
            choice = " / ";
            break;
        case "add":
            choice = " + ";
            break;
        case "subtract":
            choice = " - ";
            break;
        case "equal":
            choice = ""
            // console.log(setUp(screenText.textContent.split(" ")));
            screenText.textContent = setUp(arr);
            return;
        case "dot":
            choice = "."
            console.log(checkDuplicates(arr));
            break;
        case "sign":
            choice = "-"
            break;
        default:
            choice = `${choice}`
    }
    
    if (choice === "clear")
        screenText.textContent = "";
    else {
        screenText.textContent += choice;
        arr.push(choice);
    }
    if (arr.length % 3 == 0 && arr.length != 0) {
            console.log(`check: ${arr}`);
            screenText.textContent = setUp(arr);
        }
});