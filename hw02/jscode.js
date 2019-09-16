(function() {
    "use strict";
    var numOfNum = 0;
    var numOfOper = 0;
    var cleanScreen = false;
    var typedNumber = false;
    var currentOperator;
    var firstNum = "0";
    var secondNum = "0";

    function init() {
        var b7 = document.getElementsByClassName("num");
        b7 = Array.from(b7);
        for (var i = 0; i < b7.length; ++i) {
            b7[i].addEventListener('click', clickNum);
        }

        var op = document.getElementsByClassName("op");
        op = Array.from(op);
        for (var j = 0; j < op.length; ++j) {
            op[j].addEventListener("click", clickPlus);
        }

        var clearButton = document.getElementById("C");
        clearButton.addEventListener("click", clickClear);
        // b7.addEventListener("click", clickNum(7));
    }

    function clickNum(num) {
        num = num.target.innerText;
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
        op = op.target.innerText;
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
                    case '+/=' :
                        z = x + y;
                        document.getElementById("screenId").value = z;
                        break;
                    case '-' :
                        z = x - y;
                        document.getElementById("screenId").value = z;
                        break;
                    case 'x' :
                        z = x * y;
                        document.getElementById("screenId").value = z;
                        break;
                    case '÷' :
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
