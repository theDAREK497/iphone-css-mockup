# Iphone css mockup

### [Open in github pages](https://nulnow.github.io/iphone-css-mockup/)
![screenshot](https://image.ibb.co/bRtRgT/2018_05_18_22_48_25.png)

## Html:

```Html
<div id="iphone" class="shadow margin0auto margin-top-30px">
    <div id="power"></div>
    <div id="camera"></div>
    <div id="speaker"></div>
    <div id="screen">
        <img src="screen.png" height="100%" width="100%" alt="ios 11 interface" usemap="#ios-11-interface">
        <map name="ios-11-interface">
            <area shape="rect" coords="180,350,230,390"  alt="music icon" id="music-icon">
        </map>
        <audio src="track.mp3" id="ussr-song"></audio>
    </div>
    <div id="button"></div>
</div>
```

##Css:
```css
#iphone{
    height: calc(115.2px * 5 - 80px);
    width: calc(58.6px * 4.5);
    background-color: #0B0B0B;
    background: linear-gradient(-45deg, #0B0B0B 50%, #2C2C2C 100%);
    border-width: 5px;
    border-color: #2066E7;
    border-style: solid;
    border-radius: 30px;
    padding-top: 20px;
}

#power{
    position: relative;
    height: 5px;
    width: 45px;
    background-color: #2066E7;
    margin-top: -29px;
    float: right;
    margin-right: 30px;
    border-radius: 5px 5px 0 0;
}

#screen{
    height: calc(960px / 2.4);
    width: calc(100% - 25px);
    background: linear-gradient(-45deg, black 50%, #BFBCBC 100%);
    /*background-image: url(screen.png);*/
    background-size: 100% 100%;
    margin: 0 auto;
}

#camera{
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: black;
    margin: 0 auto;
    margin-top: 0px;
    margin-bottom: 5px;
}

#speaker{
    margin: 0 auto;
    background-color: black;
    height: 10px;
    width: 60px;
    border-radius: 5px;
    margin-bottom: 10px;
}

#button{
    margin: 0 auto;
    background: linear-gradient(to right, #999999 0.1%, black 40%);
    height: calc(40px - 12px);
    width: 40px;
    border-radius: 100%;
    margin-top: 10px;
    padding-top: 12px;
}

#button::before{
    background-color: black;
    border-width: 1.5px;
    border-color: #878787;
    border-radius: 5px;
    border-style: solid;
    display: block;
    height: 15px;
    width: 15px;
    content: "";

    margin: 0 auto;
}
```

## Result:
![mockup](https://image.ibb.co/mabe1T/2018_05_18_22_51_38.png)
### [Open in github pages](https://nulnow.github.io/iphone-css-mockup/)