# Matt's Portfolio **([Link](https://mstephen19.github.io))**

This is a website that displays a bit of information about myself, my skills, my projects, as well as my contact information.

![Image](./assets/images/siteDemo.gif)

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Google Fonts](https://fonts.google.com/specimen/Josefin+Sans#glyphs) (Josefin Sans font)
* [ColorHunt](https://colorhunt.co/) (for color pallete)
* [Steven Stromick](https://codepen.io/sstromick/pen/KKwQbrx) (CSS rotate animation in navbar)
* [LiceCap](https://www.cockos.com/licecap/) (to easily record gifs)
* [Pixelmator](https://www.pixelmator.com/pro/) (image editing + cropping)
* [Meyer Web reset.css file](https://meyerweb.com/eric/tools/css/reset/)

## Notable Stuff

### Javascript logic used to display fixed image preview on screen during hover event on list item:

``` Javascript
const refactorBtn = document.getElementById('refactor');
refactorBtn.onmouseover = function(){
    document.getElementById('hideRefactor').style.display = 'block';
}
refactorBtn.onmouseout = function(){
    document.getElementById('hideRefactor').style.display = 'none';
}
```

``` CSS
.hidden {
    position: fixed;
    top: 50%;
    left: 1%;
}

.hidden img {
    max-height: 40vh;
    position: absolute;
    bottom: 0;
    border-radius: 4px;
    border: 2px solid red;
}

#hideRefactor {
    display: none;
}
```

### CSS gradient + animation in order to achieve gradient background:
``` CSS
body {
    background: linear-gradient(-50deg, #FFEF78, #98DDCA, #D5ECC2, #FFD3B4, rgb(205, 235, 205), #610094, #FFAAA7, rgb(181, 206, 214), rgb(24, 24, 24));
    background-size: 450% 450%;
    animation: moving 18s ease-in-out infinite;
}

@keyframes moving {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
}
```

## Deployed Link

* [Live Site Here](https://mstephen19.github.io)

## Author

**Matt Stephens** 

- [Link to Portfolio Site](https://mstephen19.github.io)
- [Link to Github](https://github.com/mstephen19)
- [Link to LinkedIn](https://www.linkedin.com/mstephen19)

### Acknowledgments

* Hat tip to Shawn Beaton. [His old website](https://beat0154.github.io/shawnbeatonV4/) slightly inspired this one.
* Shoutout to [Jesse Lewis](https://www.linkedin.com/in/jesseaustinlewis/) for teaching me his ways of FlexBox


