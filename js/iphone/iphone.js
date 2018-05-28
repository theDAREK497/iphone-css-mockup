class Iphone
{
    constructor (appsList, internalStorage, settings)
    {
        this.settings = settings;
        this.appsList = appsList;
        this.internalStorage = internalStorage;
    }

    init ()
    {
        var that = this;

        this.screen = document.getElementById("screen");

        this.isON = this.settings.isON || false;
        this.isScreenOn = this.settings.isScreenOn || false;

        if (this.isON && this.isScreenOn) {
            this.loadLauncher();
        }

        this.powerButton = document.getElementById("power");
        this.homeButton = document.getElementById("button");

        this.powerButton.onclick = function (event) {
            that.powerButtonClick();
        };

        this.homeButton.onclick = function (event) {
            that.homeButtonClick();
        };
    }

    loadLauncher () {
        (new Launcher(this)).init(this.screen);
    }

    homeButtonClick ()
    {
        if (this.isON) {
            this.isScreenOn = true;
            this.clearCurrentAppLibs();
            this.loadLauncher();
        }
    }

    powerButtonClick ()
    {
        // Если айфон выключен, включает его, включает экран, запускает лаунчер
        if (!this.isON) {
            this.isON = true;
            this.isScreenOn = true;
            this.loadLauncher();
        // Если айфон включен
        } else {
            // И выключен экран, включает его и показывает текущее приложение
            if (!this.isScreenOn) {
                this.isScreenOn = true;
                document.getElementById('screen').firstElementChild.style.display = 'block';
            } else {
                // И включен экран, включает его и скрывает текущее приложение
                this.isScreenOn = false;
                document.getElementById('screen').firstElementChild.style.display = 'none';
            }
        }
    }

    clearCurrentAppLibs ()
    {
        var libs = document.getElementsByClassName('currentAppLib');
        for (var i=0; i<libs.length; i++) {
            libs[i].remove();
        }
    }
}