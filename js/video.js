"use strict"
//-----------Воспроизведение видео при нажатии на плэй------------//

const video = document.querySelector("#video");
const button = document.querySelector("#video__btn");
const videoTxtWrapper = document.querySelector(".video__txt-wrapper")

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);


//---------Скрытие txt-wrapper при воспроизведении видео--------//
//TODO ------не работает

/* $(".video__btn").click(function() {
  $(".video__btn").addClass('video__btn-hide');
}); */