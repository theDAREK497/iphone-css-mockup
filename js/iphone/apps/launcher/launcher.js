class Launcher extends Application
{
    init (screen)
    {
        // Загружаем CSS приложения
        this.loadCSS({
            data: 'safari',
            href: 'js/iphone/apps/launcher/ios.css',
        });

        // Сюда вставляем html приложения
        this.component = `
            <div class="interface">
                <div class="icons">
                    <div class="icon-row">
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                    </div>
                    <div class="icon-row">
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                    </div>
                    <div class="icon-row">
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                    </div>
                    <div class="icon-row">
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
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
            </div>`;

        // Встраиваем этот HTML в экран
        this.loadComponent(screen);


        // Важное
        var that = this;
        
        // Загружаем обои
        if (localStorage && localStorage["iphone__launcher-wallpaper"]) {
            document.getElementsByClassName('interface')[0].style.backgroundImage = 'url('+localStorage["iphone__launcher-wallpaper"]+')';
        } else {
            ;;;
        }

        // Загружаем иконки и ставим обработчкики
        for (let i=0; i<this.iphone.appsList.length;i++) {

            if (this.iphone.appsList[i].position[0] == -1) {
                var iconRow = document.getElementsByClassName("dockbar")[0];
            } else {
                var iconRow = document.getElementsByClassName("icon-row")[this.iphone.appsList[i].position[0]];
            }
            var iconCell = iconRow.children[this.iphone.appsList[i].position[1]];
            iconCell.classList.add('icon--active');
            var appName = this.iphone.appsList[i].name;

            var iconImg = document.createElement('img');
            iconImg.src = "js/iphone/apps/"+ appName + "/" + appName + ".png";
            iconImg.classList.add('icon__img');

            var iconName = document.createElement('p');
            iconName.classList.add('icon__name');
            iconName.innerText = appName;

            iconCell.appendChild(iconImg);
            iconCell.appendChild(iconName);

            // iconCell.style.backgroundImage = "url(js/iphone/apps/"+ appName + "/" + appName + ".png" +")";

            // На каждую иконку
            iconCell.onclick = function (event) {

                // При нажатии вызывается конструктор приложения иконки
                var AppConstructor = that.iphone.appsList[i].app;
                var app = new AppConstructor(that.iphone);

                // И отрисовывается на экране айфона
                app.init(that.iphone.screen);
            }

        }

        // Вешаем обработчик на двойной клик по экрану
        // запустит приложение смены обоев
        document.getElementsByClassName('interface')[0].ondblclick = function (event) {
            var wallpaperApp = new WallpaperApp(that.iphone);
            wallpaperApp.init(screen);
        }
    }
}