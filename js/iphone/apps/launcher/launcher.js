var launcherComponent = `
            <div class="interface">
                <div class="icons">
                    <div class="icon-row">
                        <div class="icon" id="mail_icon"></div>
                        <div class="icon" id="app_store_icon"></div>
                        <div class="icon" id="clock_icon"></div>
                        <div class="icon" id="maps_icon"></div>
                    </div>
                    <div class="icon-row">
                        <div class="icon" id="calculator_icon"></div>
                        <div class="icon" id="photos_icon"></div>
                        <div class="icon" id="videos_icon"></div>
                        <div class="icon" id="contacts_icon"></div>
                    </div>
                    <div class="icon-row">
                        <div class="icon" id="itunes_icon"></div>
                        <div class="icon" id="game_center_icon"></div>
                        <div class="icon" id="notes_icon"></div>
                        <div class="icon" id="reminders_icon"></div>
                    </div>
                    <div class="icon-row">
                        <div class="icon" id="weather_icon"></div>
                        <div class="icon" id="calendar_icon"></div>
                        <div class="icon" id="face_time_icon"></div>
                        <div class="icon" id="compass_icon"></div>
                    </div>
                    <div class="icon-row">

                    </div>
                </div>
                <div class="marker">
                    <div class="marker__point"></div>
                </div>
                <div class="dockbar">
                    <div class="icon" id="phone_icon"></div>
                    <div class="icon" id="messages_icon"></div>
                    <div class="icon" id="safari_icon"></div>
                    <div class="icon" id="music_icon"></div>
                </div>
            </div>`


class Launcher {
    constructor(iphone) {
        this.iphone = iphone;
        this.HTML = launcherComponent;
    }
    init (screen) {
        var that = this;
        // Отрисовываемся
        screen.innerHTML = this.HTML;
        var currentApp = document.getElementById('current-app');
        // Загружаем обои
        if (localStorage && localStorage["iphone__launcher-wallpaper"]) {
            document.getElementsByClassName('interface')[0].style.backgroundImage = 'url('+localStorage["iphone__launcher-wallpaper"]+')';
        } else {
            ;;;
        }

        // Вешаем обработчик на иконку калькулятора
        var calculator = document.getElementById("calculator_icon");
        calculator.onclick = function (event) {
            var calculator = new Calculator();
            calculator.init(screen);
        }

        // Вешаем обработчик на иконку браузера
        var browser = document.getElementById("safari_icon");
        browser.onclick = function (event) {
            var browser = new Browser(that.iphone);
            browser.init(screen);
        }

        // Вешаем обработчик на двойной клик по экрану
        // запустит приложение смены обоев
        document.getElementsByClassName('interface')[0].ondblclick = function (event) {
            var wallpaperApp = new WallpaperApp(that.iphone);
            wallpaperApp.init(screen);
        }
    }
}
