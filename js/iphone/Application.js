class Application
{
    constructor (iphone)
    {   
        this.iphone = iphone;
    }

    loadComponent (screen)
    {
        screen.innerHTML = this.component;
    }
    loadCSS (css)
    {
        if (!this.CSS) {
            this.CSS = [];
        }
        this.CSS.push(css);

        // Подгружает свой css на страницу
        var cssElem = document.createElement('link');
        cssElem.rel = 'stylesheet';
        cssElem.href = css.href;
        cssElem.data = css.data;

        var links = document.getElementsByTagName('link');
        var currentCSSLinks = [].filter.call(links, function (link) {
            return link.href == cssElem.href;
        });

        if (currentCSSLinks.length == 0) {
            document.head.appendChild(cssElem);
        }
    }
    clearCSS () {}
}
