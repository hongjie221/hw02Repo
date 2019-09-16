(function () {
    "use strict";
var numOfNum = 0;
var numOfOper = 0;
var cleanScreen = false;
var typedNumber = false;
var currentOperator;
firstNum = "0";
secondNum = "0";

function clickNum(num) {
    typedNumber = true;
    if (cleanScreen) {
        document.getElementById("screenId").value="";
    }
    cleanScreen = false;
    let checkDot = document.getElementById("screenId").value;
    if (checkDot.includes(".") && num == '.') {

    }
    else {
        document.getElementById("screenId").value+=num;
    }
}

function clickPlus(op) {
    if (!typedNumber) {
        currentOperator = op;  
    }
    else {
        if (numOfNum == 0) {
            numOfNum = 1;
            firstNum = document.getElementById("screenId").value;
            currentOperator = op;
        }
        else {
            secondNum = document.getElementById("screenId").value;
            let x = parseFloat(firstNum);
            let y = parseFloat(secondNum);
            var z;
            switch(currentOperator) {
                case '+' :
                    z = x + y;
                    document.getElementById("screenId").value = z;
                    break;
                case '-' :
                    z = x - y;
                    document.getElementById("screenId").value = z;
                    break;
                case '*' :
                    z = x * y;
                    document.getElementById("screenId").value = z;
                    break;
                case '/' :
                    z = x / y;
                    document.getElementById("screenId").value = z;
                    break;
            }
            document.getElementById("screenId").value = z;
            firstNum = z;
            currentOperator = op;
            secondNum = "0";
            numOfOper = 0;
        }   
        numOfOper++;
        typedNumber = false;
        cleanScreen = true;
    }
}

function clickClear() {
    document.getElementById("screenId").value ="";
    firstNum = "0";
    secondNum = "0";
}

window.addEventListener("load", init, false);

})();
