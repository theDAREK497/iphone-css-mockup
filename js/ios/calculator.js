var calculatorComponent  = `<div class="calculator__output-block">
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
    var calculatorButtons = document.getElementsByClassName('calculator__button');
    for (var i in calculatorButtons) {
        var button = calculatorButtons[i];
        if ( !isNaN(button.innerHTML-1)) {
            button.onclick = function (event) {
                var output = document.getElementById('calculator__output-text');
                console.log('triggered')
                if (output == 0) {
                    output = event.target.innerHTML;
                } else {
                    output += event.target.innerHTML;
                }
            }
        }
    }
};