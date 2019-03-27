var iphone = new Iphone(
    // Список приложений
    [
        {
            name: 'calculator',
            app: Calculator,
            position: [1,0],
        },
        {
            name: 'safari',
            app: Safari,
            position: [1, 1],
        },
        {
            name: 'wallpaperApp',
            app: WallpaperApp,
            position: [-1, 2],
        },
        {
            name: 'snake',
            app: Snake,
            position: [1,2],
        }
    ],
    // Память айфона
    {
        imgs: [
        "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg",
        "0.png",
        ],
    },

    // Параметы
    {
        isON: true,
        isScreenOn: true,
    },

);
iphone.init();