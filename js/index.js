
// 震动效果
let ma_nr1 = document.querySelector('.ma_nr1')
let ma_nr2 = document.querySelector('.ma_nr2')
let ma_nr3 = document.querySelector('.ma_nr3')
let ma_nr8 = document.querySelector('.ma_nr8')
let ma_nr5 = document.querySelector('.nr5_up')
let ma_nr6 = document.querySelector('.nr6_up')
let na_nr11 = document.querySelector('.dom')
let na_nr13 = document.querySelector('.box4')
let box3 = document.querySelector('.box3')
let sz = document.querySelector('.sz')
var audio = document.getElementById("myAudio");
var audio1 = document.getElementById("myAudio1");
var audio2 = document.getElementById("myAudio2");
setInterval(() => {
    sz.innerHTML = new Date()
}, 1000);
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            console.log(this.activeIndex);
            switch (this.activeIndex) {
                case 1:
                    ma_nr1.classList.add('animate__bounce')
                    setTimeout(() => {
                        ma_nr1.classList.remove('animate__bounce')
                    }, 1000);
                    break;
                case 2:
                    ma_nr2.classList.add('animate__rubberBand')
                    setTimeout(() => {
                        ma_nr2.classList.remove('animate__rubberBand')
                    }, 1000);
                    break
                case 4:
                    ma_nr3.classList.add('animate__fadeIn')
                    setTimeout(() => {
                        ma_nr3.classList.remove('animate__fadeIn')
                    }, 1000);
                    audio2.play()
                    setInterval(() => {
                        audio2.pause();
                    }, 1000);
                    break
                case 6:
                    // ma_nr5.classList.add('animate__backInUp')
                    // setTimeout(() => {
                    //     ma_nr5.classList.remove('animate__backInUp')
                    // }, 1000);
                    audio2.play()
                    setInterval(() => {
                        audio1.pause();
                    }, 1000);
                    break
                case 8:
                    audio.play();
                    setInterval(() => {
                        audio.pause();
                    }, 1000);
                    break;
                case 11:
                    na_nr11.classList.add('img')
                    setTimeout(() => {
                        box3.classList.remove('flag')
                    }, 2000);
                    break
                case 12:
                    na_nr13.classList.add('animate__shakeY')
                    set(() => {
                        na_nr13.classList.remove('animate__shakeY')
                    }, 2000);
                    break
                    break

            }
        }
    }
})
