function add(a, b) {
    const argArr = Array.from(arguments);
    // console.log(argArr)
    return argArr.reduce((total, curr) => total + curr);
}

function subtract(a ,b) {
    const argArr = Array.from(arguments);
    // console.log(argArr)
    return argArr.reduce((total, curr) => total - curr);
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
    else if (arr[0].split(".").length > 2) {
        return "SYNTAX ERROR";
    }
    
    let left = +arr[0];
    let currOperator = arr[1]
    let right = +arr[2];
    left = operate(currOperator, left, right);
    if (left === "Why?")
        return "Don't divide by zero >:(";
    // for (let i = 1; i < arr.length; i++) {
    //     // i+2 < arr.length
    //     // grab operator, grab rhs, return to lhs
    //     if (i % 2 !== 0) {
    //         currOperator = arr[i];
    //     }
    //     else {
    //         let right = +arr[i];
    //         console.log(`left: ${left}, \nright: ${right}, \nop: ${currOperator}
    //         \ntype-left: ${typeof left}, \ntype-right: ${typeof right}`)
    //         left = operate(currOperator, left, right);
    //         if (left === "Why?")
    //             return "Don't divide by zero >:(";
    //         // console.log(left)
    //     }
    // }
    return left;
}

function checkDuplicates(arr) {
    console.log(`arr: ${arr[0].split(".")}`)
    let filtered = arr.filter((item) => item.split(".").length <= 2
|| item.split("-").length <= 2);
console.log(`filtered: ${filtered}}`)
if (filtered.length === arr.length)
    return true;
return false;
}

const screenText = document.querySelector(".screen");
const calcBtn = document.querySelector(".bottom");
let arr = [];

calcBtn.addEventListener("click", (event) => {
    if (screenText.textContent === "SYNTAX ERROR" ||
        screenText.textContent === "Don't divide by zero >:(")
        screenText.textContent = "";

    if (arr.length === 0) {
        arr = screenText.textContent.split(" ")
        .filter((item) => item !== "" && item !== "\n");
    }
    else {
        arr = arr.join(" ").split(" ")
        .filter((item) => item !== "" && item !== "\n");
    }
    
    let choice = `${event.target.id}`;
    // console.log(`first: [${arr}]`);
    
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
            // console.log(arr);
            screenText.textContent = setUp(arr);
            arr = [];
            return;
        case "dot":
            choice = "."
            break;
        case "sign":
            choice = "-"
            break;
        default:
            choice = `${choice}`
    }

    if (choice === "clear") {
        screenText.textContent = "";
        arr = [];
    }
    else {
        if (arr.slice(-1)[0] !== "remove") {
            // console.log(`add: ${arr}`);
            screenText.textContent += choice;
        }
        else {
            screenText.textContent = choice;
            // console.log(`remove: ${arr}`);
            arr.pop();
        }
        if (!(isNaN(+arr.slice(-1)[0])) && (!(isNaN(+choice)) || choice === "."))
            arr[arr.length - 1] += choice;
        else
            arr.push(choice);
    }
    // console.log(`second: [${arr}], choice: [${choice}]`);

    if (arr.length % 4 == 0 && arr.length != 0) {
            // console.log(`check: [${arr}]`);
            let result = setUp(arr.slice(0, 3));
            screenText.textContent = result;
            arr = [result, arr.slice(-1), "remove"];
        }
    return;
});