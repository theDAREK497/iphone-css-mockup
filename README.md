# Iphone js app platform 

### [Open in github pages](https://nulnow.github.io/iphone-css-mockup/)

This project contains an iphont css mockup and the js class for rapid *iphone apps development.*

Project structure:
* root /
    * css/      - global css (iphone, color picker)
    * img/      - just favicon
    * js/
        * colorDockBar/ - simple app that allows to cange the iphone case color
        * iphone/
            * apps/ - contains the apps codes and data (css, imgs, js and whatever they need to work)
            * Application.js - app framework class
            * iphone.js - class that represents iphone hardware behavior (home button, power button)
        main.js - entry point of the page
    * index.html

## Hello world app:

#### Register your app in the iphone:
1. Create new folder **HelloWorld** in js/iphone/apps folder
2. In **HelloWorld** folder create file **HelloWorld.js** add some image named **HelloWorld.png** (it'll be your app icon) and add **HelloWorld.css**
Your folder should look like this:

![folder and 3 files inside](https://image.ibb.co/eEmS7d/2018_05_28_17_30_48.png)

3. In **index.html** insert ```<script src="js/iphone/apps/HelloWorld/HelloWorld.js"></script>``` before **main.js** script
4. In **js/main.js** add new app in apps array
```javascript
{
    name: 'HelloWorld', // Your app name (must be the same as your app folder name)
    app: HelloWorld, // Yor app class name (Will be described below)
    position: [0,0], // Your app icon position in iphone launcher
}
```

#### Then you can write your app conde:
1. Open your **HelloWolrd.js**
2. Add this code:
```javascript
class HelloWorld extends Application
{
    init (screen)
    {
        // Load Your app CSS code
        this.loadLib('js/iphone/apps/HelloWold/HelloWorld.css');

        // Your app HTML that will be inserted in iphone screen
        this.component = `
            <div class='app-container' style='background-color: white;'>
                <h1 id='myH1'>Hello world!</h1>
                <button id='myButton'>Click</button>
            </div>`;

        // This conde inserts your app HTML in iphone screen
        this.loadComponent(screen);
        
        
        // Here you can write code for your html
        // example:
        var myButton = document.getElementById('myButton');
        myButton.onclick = function(event) {
            var myH1 = document.getElementById('myH1');
            myH1.innerText = 'Hi!';
        }

    }
}
```
3. Open index.html in your browser and you'll get this:
![iphone with HelloWorld app inside](https://image.ibb.co/bQaTVy/2018_05_28_17_26_43.png)
3. Click on your app and:
![HelloWorld app](https://image.ibb.co/kWgoDJ/2018_05_28_17_28_49.png)

### [Open in github pages](https://nulnow.github.io/iphone-css-mockup/)
