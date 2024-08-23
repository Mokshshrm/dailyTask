


// function 1
function spaceAppend(e) {

    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = document.getElementById(`${target}-question`).value;
    str += " " + "SomeThing"

    // str = str.concat(" Something");
    document.getElementById(`${target}-output`).innerText = str;
}


// function 2
function num_of_digit(e) {

    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let n = Number.parseInt(document.getElementById(`${target}-question`).value);

    // let tmp = toString(n)
    // return tmp.length;

    let digit = 0;
    while (n > 0) {
        digit++;
        n = Number.parseInt(n / 10);
    }
    console.log(n)
    document.getElementById(`${target}-output`).innerText = digit;
}




//  function 3
function eeInclude(e) {
    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = (document.getElementById(`${target}-question`).value)

    for (let i = 1; i < str.length; i++) {
        if (str[i] == str[i - 1] && str[i] == 'e') {
            document.getElementById(`${target}-output`).innerText = true;
            return;
        }
    }
    document.getElementById(`${target}-output`).innerText = false;
}




// function 4
function multiplication(e) {

    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let n = Number.parseInt(document.getElementById(`${target}-question`).value)
    document.getElementById(`${target}-output`).innerHTML = ''
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`${target}-output`).innerHTML += `<span>${n} * ${i} = ${n * i}</span>`

    }
    return;
}



// function 5
function swapLarge(e) {

    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let n = +(document.getElementById(`${target}-question`).value)

    // let b = Number.parseInt(n.toString().split("").reverse().join(""))
    // return n < b;


    // let b = 0;
    // let tmp = n;
    // while (tmp) {
    //     b = (b * 10) + (tmp % 10);
    //     tmp /= 10;
    // }
    // return n < b;

    document.getElementById(`${target}-output`).innerText = (n % 10) > (n / 10);
}




// function 6
function rightShift(e) {
    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = (document.getElementById(`${target}-question`).value)
    let arr = str.split(' ');
    let a = +arr[0];
    let b = +arr[1];

    while (b-- > 0 && a) {
        a = Math.floor(a / 2);
    }
    document.getElementById(`${target}-output`).innerText = a;
}




// function 7
function trailingZero(e) {
    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = (document.getElementById(`${target}-question`).value);

    // frontside
    if (str[0] == '0') {
        for (let i = 0; i <= str.length; i++) {
            if (i == str.length) return "0";
            if (i < str.length && str[i] != '0') {
                str = str.substr(i);
                break;
            }
        }
    }

    // 
    if (str.includes('.'))
        str = str.substr(0, str.indexOf('.'));
    document.getElementById(`${target}-output`).innerText = str;
}

// function 8
function vowelCount(e) {
    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = (document.getElementById(`${target}-question`).value)
    function is_vowel(ch) {
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (is_vowel(str[i]))
            cnt++;
    }
    document.getElementById(`${target}-output`).innerText = cnt;
}

// function 9

function movingCapToFront(e) {
    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = (document.getElementById(`${target}-question`).value)
    let i = 0;
    let j = str.length - 1;

    while (i < j) {

        // i  equal upper
        if (str[i] == str[i].toUpperCase()) {
            i++;
        }
        else if (str[j] == str[j].toLowerCase()) {
            j--;
        }
        else {
            let ch_i = str[i];
            let ch_j = str[j];
            str = str.substr(0, i) + ch_j + str.substr(i + 1, j - i - 1) + ch_i + str.substr(j + 1);
            i++;
            j--;
        }
    }
    document.getElementById(`${target}-output`).innerText = str;
}

// function 10

function sortString(e) {
    const target = Number.parseInt(e.target.getAttribute('pointer'))

    let str = (document.getElementById(`${target}-question`).value)
    let arrayChar = [];

    for (let i of str)
        arrayChar.push(i);


    // arrayChar.sort((a, b) => {
    //     return a > b ? -1 : 0;
    // })

    // // ascending
    arrayChar.sort((a, b) => {
        return a < b ? -1 : 0;
    })

    let tmp = "";
    for (let i of arrayChar)
        tmp += i;

    document.getElementById(`${target}-output`).innerText = tmp;
}

// function 11 
function divideAndCreate(e) {

    function getDigit(n) {

        if (n <= 9) {
            return n;
        }
        let tmp = 1;
        while (n > 0) {
            tmp *= (n % 10);
            n = Number.parseInt(n / 10);
        }

        return getDigit(tmp);
    }
    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = (document.getElementById(`${target}-question`).value).split(" ");

    let arr = [];

    for (let i of str)
        arr.push(Number.parseInt(i));

    let tmp = 0;
    for (let i of arr)
        tmp += i;

    console.log(tmp);
    let res = getDigit(tmp);

    document.getElementById(`${target}-output`).innerText = res;
}

// funcrtion 12
function Factorization(e) {
    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let n = Number.parseInt((document.getElementById(`${target}-question`).value))

    if (!n) return [];

    let fact = [];
    for (let i = 1; i <= n; i++) {
        if (!(n % i)) {
            fact.push(i);
        }
    }
    console.log(fact)
    document.getElementById(`${target}-output`).innerText = fact;
}



// function 13
function capatilizeBaseOnAscii(e) {

    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = (document.getElementById(`${target}-question`).value)

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') continue;

        if ((str.charCodeAt(i) % 2)) {
            let ch = str[i].toLowerCase();
            str = str.substr(0, i) + ch + str.substr(i + 1);
        }
        else {
            let ch = str[i].toUpperCase();
            str = str.substr(0, i) + ch + str.substr(i + 1);
        }
    }
    document.getElementById(`${target}-output`).innerText = str;
}




// function 14
function HighToLow(e) {

    const target = Number.parseInt(e.target.getAttribute('pointer'))
    let str = (document.getElementById(`${target}-question`).value)

    let tmp = str.split(' ');

    let arr = [];

    for (let i of tmp)
        arr.push(Number.parseInt(i));


    let first = -1;
    let second = Number.MAX_VALUE;

    for (let i of arr) {

        if (first < i) {
            first = i;
        }

        if (second > i) {
            second = i;
        }
    }
    document.getElementById(`${target}-output`).innerText = first.toString() + " " + second.toString();
}