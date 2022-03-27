
// login section

const loginBtn = document.getElementById('login-btn').addEventListener('click', function(){
    const control = document.getElementById('log-in')
    control.style.display = "none";
    const  mainPage = document.getElementById('control');
    mainPage.style.display = "block"
});

// deposite section

const button = document.getElementById('add').addEventListener('click', function(){
    const depAmount = document.getElementById("depAmount").value;
    const inputNumber = parseFloat(depAmount);

    updateText("dep-text", inputNumber);
    updateText("amt-text", inputNumber);
});

function updateText(id, inputNumber) {
    const currentText = document.getElementById(id).innerText;
    const number = parseFloat(currentText);
    const total = inputNumber + number;
    document.getElementById(id).innerText = total;
}

const withdrawBtn = document.getElementById('withdraw').addEventListener('click', function(){
    const withdrawText = document.getElementById('withdrawAmount').value;
    const withdrawAmount = parseFloat(withdrawText);

    updateText("wdrw-text",withdrawAmount)
    updateText("amt-text", -1 * withdrawAmount);

});  
