const colorsContainer3 = document.querySelector(".colors");
const sendBtn = document.querySelector(".sendbtn");

const sentMsg = document.querySelector(".sent")

const mailMeImg = document.querySelector("svg");

const colors3 = colorsContainer3.querySelectorAll("li");




for (let x = 0; x < colors3.length; x++) {
    colors3[x].style.width = "25px";
    colors3[x].style.height = "25px";
    colors3[x].style.borderRadius = "50%";
    colors3[x].style.margin = "5px 5px";
  
    switch (x) {
      case 0:
        colors3[x].style.backgroundColor = "#6957af";
        break;
      case 1:
        colors3[x].style.backgroundColor = "#f72b1c";
        break;
      case 2:
        colors3[x].style.backgroundColor = "#8a2be2";
        break;
      case 3:
        colors3[x].style.backgroundColor = "#4169e1";
        break;
      case 4:
        colors3[x].style.backgroundColor = "#daa520";
        break;
      case 5:
        colors3[x].style.backgroundColor = "#ee6192";
        break;
      case 6:
        colors3[x].style.backgroundColor = "#9acd32";
        break;
      case 7:
        colors3[x].style.backgroundColor = "#fa5b0f";
        break;
      case 8:
        colors3[x].style.backgroundColor = "#72b626";
        break;
      case 9:
        colors3[x].style.backgroundColor = "#c84bcc";
        break;
    }
    colors3[x].addEventListener("click", () => {
      for (const el of changedElements) {
        el.style.color = colors3[x].style.backgroundColor;
      }
  
      mailMeImg.style.fill = colors3[x].style.backgroundColor;
    });
  }





sendBtn.addEventListener("click", ()=> {
    sentMsg.style.display = "flex"
    sentMsg.style.justifyContent = "center"
    sentMsg.style.alignItems = "center"
})