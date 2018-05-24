var wallpaperAppComponent = `            <div class="app-container wallpaper-app">
                <p class="wallpaper-app__set-wallpaper-url-laber">Peast new wallpaper url:</p>
                <input type="text" class="wallpaper-app__img-src-field">
                <button class="wallpaper-app__load-button">set</button>
                <p class="wallpaper-app__current-wallpaper-laber">Current Wallpaper:</p>
                <img src="" alt="current wallpaper" class="wallpaper-app__current-wallpaper-img">
            </div>`



function WallpaperApp () {
    this.HTML = wallpaperAppComponent;
}

WallpaperApp.prototype.init = function(screen) {
    screen.innerHTML = this.HTML;

    var currentWallpaterHolder = document.getElementsByClassName('wallpaper-app__current-wallpaper-img')[0];
    var setButton = document.getElementsByClassName('wallpaper-app__load-button')[0];
    var imgUrlField = document.getElementsByClassName('wallpaper-app__img-src-field')[0];


    if (localStorage && localStorage["iphone__launcher-wallpaper"]) {
        currentWallpaterHolder.src = localStorage["iphone__launcher-wallpaper"];
    } else {
        ;;;
    }

    setButton.onclick = function (event) {
        localStorage["iphone__launcher-wallpaper"] = imgUrlField.value;
        currentWallpaterHolder.src = localStorage["iphone__launcher-wallpaper"];
    }

};