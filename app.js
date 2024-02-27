// Toggle
const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');
// add click event on toggle
toggle.addEventListener('click', () => {
	ul.classList.toggle('nav__active');
});

// name typewrite effect
const nameElement = document.querySelector('.header__data__contents__heading');
const nameText = "rakotondraibe joda"
let start = 0;
const typeWrite = () => {
    if(start < nameText.length) {
		nameElement.innerHTML += nameText.charAt(start);
		start++;
		setTimeout(typeWrite, 100);
	}
}
typeWrite();

// Open & close modal

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__wrapper__close')

// open modal
modalBtn.addEventListener('click', () => {
	modal.style.display = "flex";
})

// close modal
modalClose.addEventListener('click', () => {
	modal.style.display = "none";
})

/**
 * open & close banner modal
 */
const bannerModalBtn = document.querySelector('.banner-modal-btn');
const bannerModalBtn1 = document.querySelector('.banner-modal-btn1');
const bannerModalBtn2 = document.querySelector('.banner-modal-btn2');
const bannerModalBtn3 = document.querySelector('.banner-modal-btn3');
const bannerModal = document.querySelector('.banner__modal');
const bannerModal1 = document.querySelector('.banner__modal1');
const bannerModal2 = document.querySelector('.banner__modal2');
const bannerModal3 = document.querySelector('.banner__modal3');
const bannerModalClose = document.querySelector('.banner__modal__wrapper__close');
const bannerModal1Close = document.querySelector('.banner__modal1__wrapper__close');
const bannerModal2Close = document.querySelector('.banner__modal2__wrapper__close');
const bannerModal3Close = document.querySelector('.banner__modal3__wrapper__close');

// open modal
bannerModalBtn.addEventListener('click', () => {
	// modal.style.display = "flex";
    bannerModal.style.display = "flex";
})
bannerModalBtn1.addEventListener('click', () => {
    bannerModal1.style.display = "flex";
})
bannerModalBtn2.addEventListener('click', () => {
    bannerModal2.style.display = "flex";
})
bannerModalBtn3.addEventListener('click', () => {
    bannerModal3.style.display = "flex";
})
// close modal
bannerModalClose.addEventListener('click', () => {
	 bannerModal.style.display = "none";
})
bannerModal1Close.addEventListener('click', () => {
    bannerModal1.style.display = "none";
})
bannerModal2Close.addEventListener('click', () => {
    bannerModal2.style.display = "none";
})
bannerModal3Close.addEventListener('click', () => {
    bannerModal3.style.display = "none";
})

// Get current year
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// Animate ProgressBar

const skillsSection = document.getElementById('progress-section');

const progressBars = document.querySelectorAll('.progress__bar');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        // console.log(value);
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}


window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
        // console.log('show progress');
        showProgress();
    } else {
        // console.log('hide progress');
        hideProgress();
    }
})