var calculatorComponent  = `<div class="calculator__output-block">
                    <p class="calculator__accumulator">0</p>
                    <p class="calculator__output-text">0</p>
                </div>
                <div class="calculator__buttons">
                    <div class="calculator__buttons-row">
                        <div class="calculator__button calculator__button--gray">C</div>
                        <div class="calculator__button calculator__button--gray">±</div>
                        <div class="calculator__button calculator__button--gray">%</div>
                        <div class="calculator__button calculator__button--orange">/</div>
                    </div>

                    <div class="calculator__buttons-row">
                        <div class="calculator__button calculator__button--dark-gray">7</div>
                        <div class="calculator__button calculator__button--dark-gray">8</div>
                        <div class="calculator__button calculator__button--dark-gray">9</div>
                        <div class="calculator__button calculator__button--orange">*</div>
                    </div>

                    <div class="calculator__buttons-row">
                        <div class="calculator__button calculator__button--dark-gray">4</div>
                        <div class="calculator__button calculator__button--dark-gray">5</div>
                        <div class="calculator__button calculator__button--dark-gray">6</div>
                        <div class="calculator__button calculator__button--orange">-</div>
                    </div>

                    <div class="calculator__buttons-row">
                        <div class="calculator__button calculator__button--dark-gray">1</div>
                        <div class="calculator__button calculator__button--dark-gray">2</div>
                        <div class="calculator__button calculator__button--dark-gray">3</div>
                        <div class="calculator__button calculator__button--orange">+</div>
                    </div>

                    <div class="calculator__buttons-row">
                        <div class="calculator__button calculator__button--double calculator__button--dark-gray">0</div>
                        <div class="calculator__button calculator__button--dark-gray">.</div>
                        <div class="calculator__button calculator__button--orange">=</div>
                    </div>
                </div>`


function Calculator () {
    this.HTML = calculatorComponent;
}

Calculator.prototype.init = function() {


    var currentOperation = '';
    var calculatorButtons = document.getElementsByClassName('calculator__button');
    var accumulator = document.getElementsByClassName('calculator__accumulator')[0];
    var output = document.getElementsByClassName('calculator__output-text')[0];
    


    for (var i=0; i< calculatorButtons.length; i++) {

        var button = calculatorButtons[i];

        // IF DIGIT
        if ( !isNaN(button.innerHTML-1)) {
            button.onclick = function (event) {
                if (output.innerText == 0) {
                    output.innerText = event.target.innerHTML;
                } else {
                    output.innerText += event.target.innerHTML;
                }
            }

        } else if (button.innerText == 'C') {
            button.onclick = function (event) {
                accumulator.innerHTML = 0;
                output.innerText = 0;
                currentOperation = '';
            }
        } else if (button.innerText == '+') {
            button.onclick = function () {
                currentOperation = '+'
                accumulator.innerHTML -= -output.innerHTML;
                output.innerHTML = '0';
            }
        } else if (button.innerHTML == '-') {
            button.onclick = function () {
                currentOperation = '-'
                accumulator.innerHTML -= -output.innerHTML;
                output.innerHTML = '0';
            }
        } else if (button.innerHTML == '*') {
            button.onclick = function () {
                currentOperation = '*'
                accumulator.innerHTML -= -output.innerHTML;
                output.innerHTML = '0';
            }
        } else if (button.innerHTML == '/') {
            button.onclick = function () {
                currentOperation = '/'
                accumulator.innerHTML -= -output.innerHTML;
                output.innerHTML = '0';
            }
        } else if (button.innerHTML == '=') {
            button.onclick = function (event) {
                if (currentOperation == '+') {
                    output.innerHTML -= -accumulator.innerHTML;
                    accumulator.innerHTML = 0;
                } else if (currentOperation == '-') {
                    output.innerHTML = -(-accumulator.innerHTML) -output.innerHTML;
                    accumulator.innerHTML = 0;
                } else if (currentOperation == '*') {
                    output.innerHTML = (-accumulator.innerHTML) * (-output.innerHTML);
                    accumulator.innerHTML = 0;
                } else if (currentOperation == '/') {
                    output.innerHTML = (-accumulator.innerHTML) / (-output.innerHTML);
                    accumulator.innerHTML = 0;
                }
            }
        }
    }
};