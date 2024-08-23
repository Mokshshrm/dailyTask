
const display = document.getElementById('operationScreen');


addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        event.preventDefault();
        performe();
    }
})


function performe() {

    let notation = display.value;

    // display.value = eval(notation);

    // first process the expression

    function process(expr) {

        let Buffer = [];
        let numberBuffer = [];

        for (let i of expr) {
            if (!isNaN(i)) {
                numberBuffer.push(i);
            }
            else {
                if (numberBuffer.length) {
                    Buffer.push(numberBuffer.join(""));
                    numberBuffer = [];
                }
                if (i !== ' ') {
                    Buffer.push(i)
                }
            }
        }
        if (numberBuffer.length)
            Buffer.push(numberBuffer.join(""))
        return Buffer;
    }

    // convert infix to postFix with percedence

    function preceDense(oper) {

        if (oper == '%')
            return 3;

        if (oper == '+' || oper == '-')
            return 1;

        if (oper == '*' || oper == '/')
            return 2;

        return 0;
    }

    function PostFixNotation(infixNotation) {

        let operators = ['('];
        console.log(infixNotation)

        infixNotation.push(')');

        let res = [];

        for (let i of infixNotation) {

            if (!isNaN(i)) {
                res.push(i);
            }
            else if (i === '(') {
                operators.push('(');
            }
            else if (i === ')') {
                while (operators[operators.length - 1] !== '(')
                    res.push(operators.pop());

                operators.pop();
            }
            else {
                while (preceDense(operators[operators.length - 1]) >= preceDense(i))
                    res.push(operators.pop());

                operators.push(i);
            }
        }
        while (operators.length)
            res.push(operators.pop());

        console.log(res)

        return res;
    }

    function Operation(a, b, oper) {

        if (oper == '-') {
            return a - b;
        }
        if (oper == '+') {
            return a + b;
        }
        if (oper == '*') {
            return a * b;
        }
        if (oper == '/') {
            return a / b;
        }
        if (oper == '%') {
            return a % b;
        }
    }

    function EvaculatePostFix(postFixNotation) {

        let stack = [];

        for (let i of postFixNotation) {
            if (!isNaN(i)) {
                stack.push(i);
            }
            else {
                let a = Number.parseInt(stack.pop());
                let b = Number.parseInt(stack.pop());
                stack.push(Operation(b, a, i));
            }
        }
        return stack.pop();
    }


    let processedExpressino = process(notation);
    let postFixNotation = PostFixNotation(processedExpressino);
    let result = EvaculatePostFix(postFixNotation);

    display.value = result;
}

function cal(e) {
    let digit = e.target.innerText;
    display.value += digit;
    return;
}

function clearDisplay() {
    display.value = '';
}

// function backSpace() {
//     display.value = display.value.slice(0, display.value.length - 1);
// }

// first operator second
// first operator operator second


// first(first opeator second) oprator second;
// first(first opeator second) oprator operator second;