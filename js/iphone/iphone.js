var homeButton = document.getElementById("button");
homeButton.onclick = function (event) {
    main();
    navigator.vibrate([200]);
}