class Snake extends Application
{
    init (screen)
    {
        // Загружаем CSS приложения
        this.loadLib('js/iphone/apps/snake/snake.css');

        // Сюда вставляем html приложения
        this.component = `
            <div class="app-container snake"><div class="snake__score-block">
                    <p class="snake__score">Score: 0</p>
                </div>
                <div class="snake__buttons">
                    <div class="snake__buttons--up">
                        <div class="snake__button">↑</div>                        
                    </div>
                    
                    <div class="snake__buttons--down">
                        <div class="snake__button">←</div>
                        <div class="snake__button">↓</div>
                        <div class="snake__button">→</div>                        
                    </div>
                </div>
                </div>`;
        // Встраиваем этот HTML в экран
        this.loadComponent(screen);

        var currentOperation = '';
        var snakeButtons = document.getElementsByClassName('snake__button');
        var score = document.getElementsByClassName('snake__score')[0];
        for (var i=0; i< snakeButtons.length; i++) {
            var button = snakeButtons[i];
            // IF DIGIT
            if ( !isNaN(button.innerHTML-1)) {
                button.onclick = function (event) {
                    if (score.innerText === 0) {
                        score.innerText = event.target.innerHTML;
                    } else {
                        score.innerText += event.target.innerHTML;
                    }
                }
            } else if (button.innerText === '←') {
                button.onclick = function (event) {
                    score.innerText = 'left';
                    currentOperation = '';
                }
            } else if (button.innerText === '→') {
                button.onclick = function () {
                    currentOperation = '→'
                    score.innerHTML = 'right';
                }
            } else if (button.innerText === '↓') {
                button.onclick = function (event) {
                    score.innerText = 'down';
                    currentOperation = '↓';
                }
            } else if (button.innerText === '↑') {
                button.onclick = function () {
                    currentOperation = '↑'
                    score.innerHTML = 'up';
                }
            }
        }
        // Определяем логику (тут код короч сам)
        
    }
}