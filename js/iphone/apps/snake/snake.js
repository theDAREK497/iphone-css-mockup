class Snake extends Application
{
    init (screen)
    {
        // Загружаем CSS приложения
        this.loadLib('js/iphone/apps/snake/snake.css');

        // Сюда вставляем html приложения
        this.component = `
            <div class="app-container snake">
                <div class="snake__score-block">
                    <p class="snake__score-text">Go snaked!</p>                    
                </div>
                <canvas id="snake_gz_canvas" class="snake__canvas" width="200px"  height="200px"></canvas>
            
                <div class="snake__buttons">               
                    <div class="snake__buttons--up">
                        <div class="snake__button" id="snake_exit_btn">«</div> 
                        <div class="snake__button">↑</div>    
                        <div class="snake__button snake__button--start" id="snake_start_btn">GO!</div>  
                        <div class="snake__button snake__button--start" id="snake_start_btn_clap">▬▬</div>                       
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

        const gz_canvas = document.getElementById("snake_gz_canvas");
        const ctx = gz_canvas.getContext("2d");
        var snakeButtons = document.getElementsByClassName('snake__button'),
            start_btn = document.getElementById('snake_start_btn'),
            start_btn_clap = document.getElementById('snake_start_btn_clap'),
            exit_btn = document.getElementById('snake_exit_btn'),
            score_text = document.getElementsByClassName('snake__score-text')[0],
            direction = 'down',
            RED_GAME_COLOR = "#ff0f00",
            BLACK_GAME_COLOR = "#000000",
            GREY_GAME_COLOR = "#696969",
            SNAKE_BODY_COLOR = "#65c9da",
            SNAKE_SKIN_COLOR = "#07088e",
            SNAK_WALL_COLOR = GREY_GAME_COLOR,
            SNAKE_BACKGROUND_COLOR = "#67faa1",
            FOOD_COLOR = RED_GAME_COLOR,
            FOOD_AURA_COLOR = "#f6b938",
            ROCK_COLOR = GREY_GAME_COLOR,
            ROCK_AURA_COLOR = BLACK_GAME_COLOR,
            snakeSize = 10,
            score_value = 0,
            snake_player,
            food,
            tail,
            terraland,
            rock_count=3,
            timeout_of_snek=120,
            gameloop;

        var drawModule_snake = (function () {

            var bodySnake = function(x, y) {
                ctx.fillStyle = SNAKE_BODY_COLOR;
                ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
                ctx.strokeStyle = SNAKE_SKIN_COLOR;
                ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
            };

            var apple = function(x, y) {
                ctx.fillStyle = FOOD_AURA_COLOR;
                ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
                ctx.fillStyle = FOOD_COLOR;
                ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
            };

            var terrain = function(x, y) {
                ctx.fillStyle = ROCK_AURA_COLOR;
                ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
                ctx.fillStyle = ROCK_COLOR;
                ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
            };

            var drawSnake = function() {
                var length = 4;
                snake_player = [];
                for (var i = length-1; i>=0; i--) {
                    snake_player.push({x:i, y:0});
                }
            };

            var paint = function(){
                ctx.fillStyle = SNAKE_BACKGROUND_COLOR;
                ctx.fillRect(0, 0, gz_canvas.width, gz_canvas.height);
                ctx.strokeStyle = SNAK_WALL_COLOR;
                ctx.strokeRect(0, 0, gz_canvas.width, gz_canvas.height);

                start_btn.style.display = 'none';
                start_btn_clap.style.display = 'block';

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

                if (snakeX === -1 || snakeX === gz_canvas.width/snakeSize || snakeY === -1
                    || snakeY === gz_canvas.height/snakeSize || checkCollision(snakeX, snakeY, snake_player)) {
                    //рестарт игры
                    start_btn.style.display = 'block';
                    start_btn_clap.style.display = 'none';
                    ctx.clearRect(0,0,gz_canvas.width,gz_canvas.height);
                    clearInterval(gameloop);
                    gameloop=null;
                    return;
                }

                for (var j = rock_count; j>=0; j--) {
                    if (snakeX === terraland[j].x && snakeY === terraland[j].y) {
                        start_btn.style.display = 'block';
                        start_btn_clap.style.display = 'none';
                        ctx.clearRect(0,0,gz_canvas.width,gz_canvas.height);
                        clearInterval(gameloop);
                        gameloop=null;
                        return;
                    }
                }

                if(snakeX === food.x && snakeY === food.y) {
                    tail = {x: snakeX, y: snakeY};
                    score_value ++;

                    createFood();
                } else {
                    tail = snake_player.pop();
                    tail.x = snakeX;
                    tail.y = snakeY;
                }

                snake_player.unshift(tail);

                for(var i = 0; i < snake_player.length; i++) {
                    bodySnake(snake_player[i].x, snake_player[i].y);
                }

                for (var j = rock_count; j>=0; j--) {
                    terrain(terraland[j].x, terraland[j].y);
                }

                apple(food.x, food.y);
                score_text.innerText = 'Score: ' + score_value;
            };
            //Генерация еды
            var createFood = function() {
                food = {
                    x: Math.floor((Math.random() * (gz_canvas.width /10-1)) + 1),
                    y: Math.floor((Math.random() * (gz_canvas.height/10-1)) + 1)
                };

                for (var i=0; i>snake_player.length; i++) {
                    var snakeX = snake_player[i].x;
                    var snakeY = snake_player[i].y;

                    if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                        food.x = Math.floor((Math.random() * (gz_canvas.width /10-1)) + 1);
                        food.y = Math.floor((Math.random() * (gz_canvas.height/10-1)) + 1);
                        for (var j = rock_count; j>=0; j--) {
                            if (food.x===terraland[j].x && food.y === terraland[j].y ||
                                food.y === terraland[j].y && food.x===terraland[j].x) {
                                food.x = Math.floor((Math.random() * (gz_canvas.width /10-1)) + 1);
                                food.y = Math.floor((Math.random() * (gz_canvas.height/10-1)) + 1);
                            }
                        }
                    }
                }
            };
            //Генерация камней
            var createTerrain = function() {
                terraland = [];
                for (var j = rock_count; j>=0; j--) {
                    terraland[j] = {
                        x: Math.floor((Math.random() * (gz_canvas.width /10-1)) + 1),
                        y: Math.floor((Math.random() * (gz_canvas.height/10-1)) + 1)
                    };
                    for (var i=0; i>snake_player.length; i++) {
                        var snakeX = snake_player[i].x;
                        var snakeY = snake_player[i].y;
                        if (terraland[j].x===snakeX && terraland[j].y === snakeY || terraland[j].y === snakeY && terraland[j].x===snakeX) {
                            terraland[j].x = Math.floor((Math.random() * (gz_canvas.width /10-1)) + 1);
                            terraland[j].y = Math.floor((Math.random() * (gz_canvas.height/10-1)) + 1);
                            if (terraland[j].x===food.x && terraland[j].y === food.y || terraland[j].y === food.y && terraland[j].x===food.x) {
                                terraland[j].x = Math.floor((Math.random() * (gz_canvas.width /10-1)) + 1);
                                terraland[j].y = Math.floor((Math.random() * (gz_canvas.height/10-1)) + 1);
                            }
                        }
                    }
                }
            };
            //физика
            var checkCollision = function(x, y, array) {
                for(var i = 0; i < array.length; i++) {
                    if(array[i].x === x && array[i].y === y)
                        return true;
                }
                return false;
            };
            //инициализация
            var init = function(){
                score_value=0;
                timeout_of_snek=120;
                direction = 'down';
                drawSnake();
                createFood();
                createTerrain();
                gameloop = setInterval(paint, timeout_of_snek);
            };

            return {
                init : init,
            };


        }());
        //кнопка старта
        exit_btn.addEventListener("click", function(){ iphone.homeButtonClick ();});
        start_btn.addEventListener("click", function(){ drawModule_snake.init();});
        start_btn_clap.style.display = 'none';
        //управление
        for (var i=0; i< snakeButtons.length; i++) {
            var button = snakeButtons[i];
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
                    if (direction !== 'right') {
                        direction = 'left';
                    }
                }
            } else if (button.innerText === '→') {
                button.onclick = function () {
                    if (direction !== 'left') {
                        direction = 'right';
                    }
                }
            } else if (button.innerText === '↓') {
                button.onclick = function (event) {
                    if (direction !== 'up') {
                        direction = 'down';
                    }
                }
            } else if (button.innerText === '↑') {
                button.onclick = function () {
                    if (direction !== 'down') {
                        direction = 'up';
                    }
                }
            }
        }
    }
}