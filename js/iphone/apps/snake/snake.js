class Snake extends Application
{
    init (screen)
    {
        // Загружаем CSS приложения
        this.loadLib('js/iphone/apps/snake/snake.css');

        // Сюда вставляем html приложения
        this.component = `
            <img src="http://www.iconarchive.com/download/i103845/blackvariant/button-ui-requests-13/Snake.ico">
             `;

        // Встраиваем этот HTML в экран
        this.loadComponent(screen);


        // Определяем логику (тут код короч сам)
        
    }
}