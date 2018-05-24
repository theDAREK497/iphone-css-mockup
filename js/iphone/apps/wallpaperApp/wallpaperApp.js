var wallpaperAppComponent = `
            <div class="app-container wallpaper-app">
                <div class="wallpaper-app__head">
                    <p class="wallpaper-app__set-wallpaper-url-laber">Peast new wallpaper url:</p>
                    <input type="text" class="wallpaper-app__img-src-field">
                    <button class="wallpaper-app__load-button">set</button>
                    <button class="wallpaper-app__my-imgs-button">my imgs</button>
                </div>
                <div class="wallpaper-app__body">

                </div>
            </div>
`;

var wallpaperAppComponent__currentImageBlock = `
                    <p class="wallpaper-app__current-wallpaper-laber">Current Wallpaper:</p>
                    <img src="" alt="current wallpaper" class="wallpaper-app__current-wallpaper-img">
`;



function WallpaperApp (iphone) {
    this.iphone = iphone;
    this.HTML = wallpaperAppComponent;
    this.wallpaperAppComponent__currentImageBlock = wallpaperAppComponent__currentImageBlock;
}

WallpaperApp.prototype.init = function(screen) {
    var that = this;
    screen.innerHTML = this.HTML;
    document.getElementsByClassName('wallpaper-app__body')[0].innerHTML = this.wallpaperAppComponent__currentImageBlock;
    document.getElementsByClassName('wallpaper-app__current-wallpaper-img')[0].src = localStorage["iphone__launcher-wallpaper"];
    var pageState = 'current-image';

    var currentWallpaterHolder = document.getElementsByClassName('wallpaper-app__current-wallpaper-img')[0];
    var setButton = document.getElementsByClassName('wallpaper-app__load-button')[0];
    var myImgsButton = document.getElementsByClassName('wallpaper-app__my-imgs-button')[0];
    var imgUrlField = document.getElementsByClassName('wallpaper-app__img-src-field')[0];


    if (localStorage && localStorage["iphone__launcher-wallpaper"]) {
        currentWallpaterHolder.src = localStorage["iphone__launcher-wallpaper"];
    } else {
        ;;;
    }

    setButton.onclick = function (event) {
        if (imgUrlField.value) {
            localStorage["iphone__launcher-wallpaper"] = imgUrlField.value;
            document.getElementsByClassName('wallpaper-app__current-wallpaper-img')[0].src = localStorage["iphone__launcher-wallpaper"];
            return that.iphone.homeButtonClick();
        }
        if (pageState == 'current-image') {
            return that.iphone.homeButtonClick();
        }
    }

    myImgsButton.onclick = function (event) {
        pageState = 'my-images';
        var imgs = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
        var imgsComponent = document.createElement('div');
        imgsComponent.classList.add('wallpaper-app__my-imgs-component');
        for (var i=0;i<imgs.length;i++){
            imgsComponent.innerHTML += '<img class="wallpaper-app__image" src="js/iphone/apps/wallpaperApp/wallpapers/' + imgs[i] + '">';
        }
        document.getElementsByClassName('wallpaper-app__body')[0].innerHTML = "";
        document.getElementsByClassName('wallpaper-app__body')[0].appendChild(imgsComponent);

        var imgsOnPage = document.getElementsByClassName('wallpaper-app__image');
        for (var i=0;i<imgsOnPage.length;i++) {
            var img = imgsOnPage[i];
            img.onclick = function (event) {
                pageState = 'current-image';
                localStorage["iphone__launcher-wallpaper"] = event.target.src;
                document.getElementsByClassName('wallpaper-app__body')[0].innerHTML = wallpaperAppComponent__currentImageBlock;
                document.getElementsByClassName('wallpaper-app__current-wallpaper-img')[0].src = localStorage["iphone__launcher-wallpaper"];
            }
        }

    }

};