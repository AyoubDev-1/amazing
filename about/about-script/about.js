const colorsContainer2 = document.querySelector(".colors");
const colors2 = colorsContainer2.querySelectorAll("li");
const download = document.querySelector(".download");
const about = document.querySelector(".about");

const cyrcles = document.querySelectorAll(".cyrcle");

const icons = document.querySelectorAll(".icon");

const bgChange = document.querySelectorAll(".change-bg-color");


const siwtchColors = (color) => {
  for (let x = 0; x < cyrcles.length; x++) {
    switch (x) {
      case 0:
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(46deg, rgba(34,34,34,1) 75%, ${color} 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 1:
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(46deg, rgba(34,34,34,1) 30%, ${color} 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 2:
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(46deg, rgba(34,34,34,1) 11%, ${color} 0%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 3:
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(46deg, rgba(34,34,34,1) 46%, ${color} 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 4:
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(46deg, rgba(34,34,34,1) 34%, ${color} 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 5:
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(46deg, rgba(34,34,34,1) 5%, ${color} 2%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 6:
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(46deg, rgba(34,34,34,1) 50%, ${color} 25%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
      case 7:
        cyrcles[
          x
        ].style.borderImage = `linear-gradient(46deg, rgba(34,34,34,1) 35%, ${color} 5%)`;
        cyrcles[x].style.borderImageSlice = "5";
        break;
    }
  }
};

for (let x = 0; x < colors2.length; x++) {
  colors2[x].style.width = "25px";
  colors2[x].style.height = "25px";
  colors2[x].style.borderRadius = "50%";
  colors2[x].style.margin = "5px 5px";

  switch (x) {
    case 0:
      colors2[x].style.backgroundColor = "#6957af";
      break;
    case 1:
      colors2[x].style.backgroundColor = "#f72b1c";
      break;
    case 2:
      colors2[x].style.backgroundColor = "#8a2be2";
      break;
    case 3:
      colors2[x].style.backgroundColor = "#4169e1";
      break;
    case 4:
      colors2[x].style.backgroundColor = "#daa520";
      break;
    case 5:
      colors2[x].style.backgroundColor = "#ee6192";
      break;
    case 6:
      colors2[x].style.backgroundColor = "#9acd32";
      break;
    case 7:
      colors2[x].style.backgroundColor = "#fa5b0f";
      break;
    case 8:
      colors2[x].style.backgroundColor = "#72b626";
      break;
    case 9:
      colors2[x].style.backgroundColor = "#c84bcc";
      break;
  }
  colors2[x].addEventListener("click", () => {
    for (const el of changedElements) {
      el.style.color = colors2[x].style.backgroundColor;
    }

    siwtchColors(colors2[x].style.backgroundColor);

    
    for (const icon of icons) {
      icon.style.backgroundColor = colors2[x].style.backgroundColor;
    }
    for (const el of bgChange) {
      el.style.backgroundColor = colors2[x].style.backgroundColor;
    }
   
    about.style.backgroundColor = colors2[x].style.backgroundColor;
    download.style.backgroundColor = colors2[x].style.backgroundColor;
  });
}

siwtchColors("rgba(255,179,0,1)");

// for showing fill-nav
const fillNav2 = document.querySelector(".fill-nav2");

const miniNav2 = document.querySelector(".mini-nav2");
miniNav2.addEventListener("click", () => {
  fillNav2.style.left = "0";
  fillNav2.style.flexDirection = "row";
  fillNav2.style.justifyContent = "center";
  fillNav2.style.alignItems = "flex-start";
  console.log("sdjhfgvk");
});

// for closing fill-nav
const close2 = document.querySelector(".close-fill-nav2");

close2.addEventListener("click", () => {
  fillNav2.style.left = "-150%";
});
