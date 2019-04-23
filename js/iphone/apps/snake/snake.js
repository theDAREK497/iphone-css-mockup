class Snake extends Application
{
    init (screen)
    {
        // Загружаем CSS приложения
        this.loadLib('js/iphone/apps/snake/snake.css');

        // Сюда вставляем html приложения
        this.component = `
            <div class="app-container snake"><div class="snake__score-block">
                    <p class="snake__score">Score: 0</output></p>
                </div>
                <canvas id="snake__canvas"></canvas>
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

        var snakeSize = 10,
        score_value = 0,
        snake_player,
        food,
        tail,
        dif_terra,
        terraland,
        gameloop,
        direction;
        const canvas = document.getElementById("snake__canvas");
        const ctx = canvas.getContext("2d");
        var snakeButtons = document.getElementsByClassName('snake__button');
        var score_text = document.getElementsByClassName('snake__score');
        direction = 'down';

        var bodySnake = function(x, y) {
            ctx.fillStyle = "#000000";
            ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
            ctx.strokeStyle = "#000000";
            ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        };

        var drawSnake = function() {
            var length = 4;
            snake_player = [];
            for (var i = length-1; i>=0; i--) {
                snake_player.push({x:i, y:0});
            }
        };

        function init_snake() {
            drawSnake();
            //    createFood();
            //    createTerrain();
            gameloop = setInterval(paint, 80);
        }

        var paint = function(){
            ctx.shadowBlur = 0;
            ctx.fillStyle = "#000000";
            ctx.strokeStyle = "#000000";
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            var snakeX = snake_player[0].x;
            var snakeY = snake_player[0].y;

            if (direction === 'right') {
                snakeX++; }
            else if (direction === 'left') {
                snakeX--; }
            else if (direction === 'up') {
                snakeY--;
            } else if(direction === 'down') {
                snakeY++; }

            if (snakeX === -1 || snakeX === canvas.width/snakeSize || snakeY === -1 || snakeY === canvas.height/snakeSize ) {
                //restart game
                ctx.clearRect(0,0,canvas.width,canvas.height);
                gameloop = clearInterval(gameloop);
                alert("GAME OVER");
                document.location.reload();
            }
            score_text.innerText = 'Score: '+score_value;
        };

        //управление
        for (var i=0; i< snakeButtons.length; i++) {
            var button = snakeButtons[i];
            // IF DIGIT
            if ( !isNaN(button.innerHTML-1)) {
                button.onclick = function (event) {
                    if (score_text.innerText === 0) {
                        score_text.innerText = event.target.innerHTML;
                    } else {
                        score_text.innerText += event.target.innerHTML;
                    }
                }
            } else if (button.innerText === '←') {
                button.onclick = function (event) {
                    if (direction !== 'left') {
                        direction = 'left';
                    }
                }
            } else if (button.innerText === '→') {
                button.onclick = function () {
                    if (direction !== 'right') {
                        direction = 'right';
                    }
                }
            } else if (button.innerText === '↓') {
                button.onclick = function (event) {
                    if (direction !== 'down') {
                        direction = 'down';
                    }
                }
            } else if (button.innerText === '↑') {
                button.onclick = function () {
                    if (direction !== 'up') {
                        direction = 'up';
                    }
                }
            }
        }
        init_snake();
    }
}