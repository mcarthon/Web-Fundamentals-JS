const display = document.getElementById("display");
let [inputNumber, operation]= ["", ""];
let total = 0;

function press(input) {
    inputNumber += input;
    display.innerHTML = inputNumber;
}

function setOP(op) {
    if (operation !== "") {
        calculate();
    }
    operation = op;
    total = parseFloat(inputNumber);
    inputNumber = "";
}

function clr() {
    if (display.innerHTML.length > 1) {
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    }
    else {
    display.innerHTML = "0";
    }
}

function calculate() {
    if (inputNumber === "") {
        return;
    }
    switch(operation) {
        case "+":
            total += parseFloat(inputNumber);
            break;
        case "-":
            total -= parseFloat(inputNumber);
            break;
        case "*":
            total *= parseFloat(inputNumber);
            break;
        case "/":
            total /= parseFloat(inputNumber);
            break;
    }
    operation = "";
    inputNumber = total;
    display.innerHTML = inputNumber;
}

