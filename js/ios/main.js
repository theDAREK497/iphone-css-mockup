var screen = document.getElementById("screen");
var calculator = document.getElementById("calculator_icon");
var mainScreenHtml = document.getElementById("screen").innerHTML;
var homeButton = document.getElementById("button");


function menuInit() {
    calculator = document.getElementById("calculator_icon");
    calculator.onclick = function (event) {
        var app = document.createElement('div');
        app.classList.add('app-container');
        app.classList.add('calculator');
        app.innerHTML = calculatorComponent;
        screen.innerHTML = '';
        screen.appendChild(app);
        (new Calculator()).init();

    }

}


homeButton.onclick = function (event) {
    screen.innerHTML = mainScreenHtml;

    menuInit();
}

menuInit();