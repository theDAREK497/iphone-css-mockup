var iphone__vibroTime = 100;
var iphone__isON = false;
var iphone__isScreenON = false;


// Загружает на экран лаунчер
function iphone__loadLauncher () {
    var screen = document.getElementById("screen");
    var launcher = new Launcher();
    launcher.init(screen);
}


// При нажатии на кнопку Домой включается экран, если айфон включен, если выключен, то кнопка ничего не делает
var homeButton = document.getElementById("button");
function iphone__homeButtonClick(event) {
    if (iphone__isON) {
        iphone__isScreenON = true;
        iphone__loadLauncher();
    }

}
homeButton.onclick = iphone__homeButtonClick;


var powerButton = document.getElementById("power");
function iphone__powerButtonClick (event) {
    // Если айфон выключен, включает его, включает экран, запускает лаунчер
    if (!iphone__isON) {
        iphone__isON = true;
        iphone__isScreenON = true;
        iphone__loadLauncher();
    // Если айфон включен
    } else {
        // И выключен экран, включает его и показывает текущее приложение
        if (!iphone__isScreenON) {
            iphone__isScreenON = true;
            document.getElementById('screen').firstElementChild.style.display = 'block';
        } else {
            // И включен экран, включает его и скрывает текущее приложение
            iphone__isScreenON = false;
            document.getElementById('screen').firstElementChild.style.display = 'none';
        }
    }
}
powerButton.onclick = iphone__powerButtonClick;