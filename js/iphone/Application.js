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
    loadLib (lib)
    {
        if (!this.libs) {
            this.libs = [];
        }
        this.libs.push(lib);

        // Получает расширение библиотеки
        var lib_type = lib.split('.')[lib.split('.').length-1];

        if (lib_type == 'css') {
            var elem = document.createElement('link');
            elem.rel = 'stylesheet';
            elem.href = lib;
        } else if (lib_type == 'js') {
            var elem = document.createElement('script');
            elem.src = lib;
        }
        elem.classList.add('currentAppLib');
        document.head.appendChild(elem);

    }
}
