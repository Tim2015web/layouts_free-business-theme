let sliderBtn = document.querySelectorAll(".slider"); // кнопки слайдера
let slideImg = document.querySelectorAll(".laptop div"); // изображения слайдера

// нажатие на кнопки слайдера
sliderBtn.forEach(e => e.addEventListener("click", function () {
    sliderBtn.forEach(s => s.classList.remove("slider-check"));
    slideImg.forEach(i => i.classList.add("slide-hide"));
    countSlide = slideImg[e.dataset.index];
    e.classList.add("slider-check");
    slideImg[e.dataset.index].classList.remove("slide-hide");
}))