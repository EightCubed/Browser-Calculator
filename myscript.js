const num = document.querySelectorAll('.number');
const op = document.querySelectorAll('.operation');
const backspace = document.querySelector('.op_bac');
const clear = document.querySelector('.op_cle');
const equal = document.querySelector('.op_equ');
var result = document.querySelector('.result-area');

var string = "";
var first_no = null;
var operation;
var op_check = false;
var flag = 0;
var avoid_operator_beg = 0;

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function () {
        if (first_no != null && flag == 0) {
            result.innerText = '';
            flag--;
        }
        result.innerText = result.innerText + event.target.innerText;
        string = result.innerText;
        avoid_operator_beg++;
    });
}

for (let i = 0; i < op.length; i++) {
    op[i].addEventListener('click', function () {
        if (avoid_operator_beg != 0) {
            // if (op_check == true) {
            //     calculate();
            // }
            op_check = true;
            operation = event.target.innerText;
            first_no = string;
            string = '';
            result.innerHTML = first_no + operation;
        }
    });
}

clear.addEventListener('click', function () {
    var string = '';
    var first_no = '';
    result.innerText = '';
    var operation = '';
    var op_check = false;
    var flag = 0;
    var avoid_operator_beg = 0;
});

backspace.addEventListener('click', function () {
    string = string.slice(0, string.length - 1);
    if (string != '' && operation != '') {
        operation = '';
    }
    result.innerText = string;
});

equal.addEventListener('click', function () {
    if (operation != null && op_check == true && string != '')
        calculate();
});

function calculate() {
    console.log(first_no);
    console.log(operation);
    console.log(string);
    first_no=first_no.strip("+").strip("-").strip("*").string("/")
    if (string=="")
        string=0;


    if (operation === '+')
        result.innerText = parseInt(first_no) + parseInt(string);

    else if (operation === '-')
        result.innerText = parseInt(first_no) - parseInt(string);

    else if (operation === 'x')
        result.innerText = parseInt(first_no) * parseInt(string);

    else if (operation === '/')
        result.innerText = parseInt(first_no) / parseInt(string);

    string = result.innerText;
    op_check = false;
    first_no = null;
    flag++;
}