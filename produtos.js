let imagens = ['img/MicrosoftTeams-image (1).png', 'img/MicrosoftTeams-image (2).png ', 'img/MicrosoftTeams-image (3).png', 'img/MicrosoftTeams-image.png'];
let Index = 0;
let time = 4000;
function slideShow() {
  document.getElementById('image').src = imagens[Index];
  Index++;
  if (Index == imagens.length) {
    Index = 0;
  }
  setTimeout('slideShow()', time);
}
slideShow();