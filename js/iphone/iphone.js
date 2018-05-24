var iphone__vibroTime = 100;
var iphone__isON = false;


function iphone__loadLauncher () {
    var screen = document.getElementById("screen");
    var launcher = new Launcher();
    launcher.init(screen);
}


var homeButton = document.getElementById("button");
function iphone__homeButtonClick(event) {
    iphone__isON = true;
    iphone__loadLauncher();
}
homeButton.onclick = iphone__homeButtonClick;


var powerButton = document.getElementById("power");
function iphone__powerButtonClick (event) {
    if (iphone__isON) {
        iphone__isON = false;
        document.getElementById("screen").innerHTML = "";
    } else {
        iphone__isON = true;
        iphone__loadLauncher();
    }
}
powerButton.onclick = iphone__powerButtonClick;