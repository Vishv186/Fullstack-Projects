let num = 1;
let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let numDisplay = document.getElementById("num");

// Function to increment the number
function increment() {
    num++;
    if (num < 1) {
        num = 1;
    }
    numDisplay.innerHTML = num;
}

// Function to decrement the number
function decrement() {
    num--;
    if (num < 1) {
        num = 1;
        alert("Number of people cannot be less than one")
    }
    numDisplay.innerHTML = num;
}

// Add event listeners to buttons
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);


// code for calculating tip //

var tipAmount = 0.00;
var totalAmount = 0.00;
var billTip = 0.00;
var tipVal = document.querySelectorAll('.tip-button');

// to get and store values in the tip buttons
tipVal.forEach(function (ele) {
    ele.addEventListener('click', function () {
        billTip = parseInt(this.getAttribute("value"));
    });
})

var billValue = document.getElementById("text");
var billBtn = document.getElementById("generateBill");

// for generate-reset buttons

billBtn.addEventListener('click', function () {
    if (this.value === 'GENERATE BILL') {
        this.value = 'RESET';
        document.getElementById("generateBill").innerText = "GENERATE BILL";
        reset();
    }
    else {
        this.value = 'GENERATE BILL';
        document.getElementById('generateBill').innerText = "RESET";
        calculation();
    }
})

// calculation function
function calculation() {
    var billVal = parseInt(billValue.value);
    var tipAmount = billTip * billVal / 100/num;
    var totalAmount =  billVal/num + billTip * billVal/100 /num;
    document.getElementById("tipAmount").innerText = tipAmount;
    document.getElementById("totalAmount").innerText = totalAmount;
}

// function reset

function reset() {
    document.getElementById("tipAmount").innerText = "0.00";
    document.getElementById("totalAmount").innerText = "0.00";
    document.getElementById("text").value = 0;
    document.getElementById("num").innerHTML = 0;
}