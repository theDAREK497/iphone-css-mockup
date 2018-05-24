var browserComponent = `            <div class="app-container browser">
                <div class="browser__navbar">
                    <input class="browser__addres-field" type="text">
                    <button class="browser__reload-button">&#x21ba;</button>
                </div>
                
                    <iframe class="browser__page" src="" frameborder="0"></iframe>
                
            </div>`

function Browser (iphone) {
    this.iphone = iphone;
    this.HTML = browserComponent;
}

Browser.prototype.init = function(screen){
     screen.innerHTML = this.HTML;

    var reloadButton = document.getElementsByClassName('browser__reload-button')[0];
    var browserPage = document.getElementsByClassName('browser__page')[0];
    reloadButton.onclick = function(event) {
        browserPage.src = document.getElementsByClassName('browser__addres-field')[0].value;
    }
};