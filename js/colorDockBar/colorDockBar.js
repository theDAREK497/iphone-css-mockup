var colors = document.getElementById('colors');

var iphone = document.getElementById('iphone');
iphone.style.transition = 'border-color 0.6s';

var power = document.getElementById('power');
power.style.transition = 'background-color 0.6s';

for (var i=0; i<colors.children.length;i++){
    colors.children[i].style.backgroundColor = colors.children[i].id;

    colors.children[i].addEventListener('click', function (event) {
        setIphoneColor(event.target.id);
    });
}


function setIphoneColor (newColor) {
    var iphone = document.getElementById('iphone');
    var power = document.getElementById('power');

    switch (newColor) {
        case "blue":
            newColor = '#03A9F4';
            break;
        case "red":
            newColor = '#f44336';
            break;
        case "pink":
            newColor = '#E91E63';
            break;
        case "yellow":
            newColor = 'FFEB3B';
            break;
    }
    localStorage["iphone_color"] = newColor;
    iphone.style.borderColor = newColor;
    power.style.backgroundColor = newColor;
}

if (localStorage["iphone_color"]) {
    setIphoneColor(localStorage["iphone_color"]);
} else {
    localStorage["iphone_color"] = 'blue';
}