//https://stackoverflow.com/questions/6802956/how-to-position-a-div-in-a-specific-coordinates
//https://jsfiddle.net/Xw29r/

let counter = 0;
let x = 7;

window.onload = function () {
  var yesBtn = document.getElementById("ysButton");
  var noBtn = document.getElementById("noButton");


  // Set initial positions
  noBtn.style.left = yesBtn.offsetLeft + yesBtn.offsetWidth + 200 + "px";
}

function moveNoButton() {
  var button = document.getElementById("noIMGid");
  var ACTUALbutton = document.getElementById("noButton");
  var bod = document.getElementById("body");

  var width = button.offsetWidth;
  var height = button.offsetHeight;

  var i = Math.floor(Math.random() * (width));
  var j = Math.floor(Math.random() * (height));

  if (counter < 4) { //stage 1 moves around
    button.style.left = i + "px";
    button.style.top = j + "px";
  }
  else if (counter < 10) { //stage 2 saturates
    if (counter >= 4 && counter <= 7) {
      button.src = "img/noSaturation" + (counter - 3) + ".PNG";
    }
    
    button.style.left = i + "px";
    button.style.top = j + "px";

  }
  else if (counter < 27) { //stage 3 gets smol :3

    switch (counter) {
      case 8:
        document.body.style.background = "url('img/background1.PNG')";
        button.src = "img/noSaturation" + (counter - 1) + ".PNG";
        break;
      case 11:
        document.body.style.background = "url('img/background2.PNG')";
        break;
      case 12:
        document.body.style.background = "url('img/background3.PNG')";
        button.src = "img/noSaturation" + (counter - 1) + ".PNG";
        document.querySelector("#dateMeImg").src = "img/youWillDateMe.PNG";
        break;
      case 15:
        document.body.style.background = "url('img/background4.PNG')";
        break;
      case 16:
        document.body.style.background = "url('img/background5.PNG')";
        button.src = "img/noSaturation" + (counter - 1) + ".PNG";
        break;
      case 19:
        document.body.style.background = "url('img/background6.PNG')";
        break;
      case 22:
        document.body.style.background = "url('img/background.PNG')";
        button.src = "img/noButton.PNG";
        document.querySelector("#dateMeImg").src = "img/pwettyPwease.PNG"
        break;
    }
    
    button.style.left = i + "px";
    button.style.top = j + "px";
    
  }
  else {
    document.body.style.background = "url('img/background6.PNG')";
    var element = document.querySelector("#dateMeImg");
    element.classList.replace("borderQuestion", "hide");

    var element = document.querySelector("#noButton");
    element.classList.replace("noBtnClass", "hide");
  }
  counter++;
}

function yesButtonRedirect() {
  window.location.href = "https://www.youtube.com/watch?v=tQ0yjYUFKAE&ab_channel=JustinBieberVEVO&t=42s";
}

