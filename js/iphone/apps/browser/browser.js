var browserComponent = `            <div class="app-container browser">
                <div class="browser__navbar">
                    <input class="browser__addres-field" type="text">
                    <button class="browser__reload-button">&#x21ba;</button>
                </div>
                <div class="browser__page-wrapper">
                    <iframe class="browser__page" src="" frameborder="0" height="80%" width="100%"></iframe>
                </div>
            </div>`


function Browser () {
    this.HTML = browserComponent;
}

Browser.prototype.init = function(screen){
    var reloadButton = document.getElementsByClassName('browser__reload-button')[0];
    var browserPage = document.getElementsByClassName('browser__page')[0];
    reloadButton.onclick = function(event) {
        console.log(document.getElementsByClassName('browser__addres-field')[0].value)
        console.log(browserPage)
        browserPage.src = document.getElementsByClassName('browser__addres-field')[0].value;
    }
};