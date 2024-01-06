let reviewWrapEl = document.querySelectorAll('.review-wrapper');
let currentReviews = [0,2];
let faqsEl = document.querySelectorAll('.faq-card');
let discountSlider = document.querySelector('.discount-slider');
let rotationalVal = 0;
let navToggler = document.querySelector('.nav-toggler');
let listContainer = document.querySelector('.list-container');
let navScroll = document.querySelector('.navbar');






///display reiew box in about section-----------------------------
let updteReviewSlider = (cards) => {
    cards.forEach((card_index) => {
        reviewWrapEl[card_index].classList.add('active');
    });
}


setInterval(() => {
   currentReviews.forEach((card_index, i) => {
    reviewWrapEl[card_index].classList.remove('active');

    currentReviews[i] = card_index >= reviewWrapEl.length - 1 ? 0 : card_index + 1;
   });

   setTimeout(() => {
    updteReviewSlider(currentReviews);
   }, 250);

}, 3000);

updteReviewSlider(currentReviews);


// f & Q question box display-------------------------------------- 
faqsEl.forEach((faqs) => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('active');
    });
});

//discount slider image rotation------------------------------------

setInterval(() => {
    rotationalVal += 120;
    discountSlider.style.transform = `translateY(-50%) rotate(${rotationalVal}deg)`;
}, 2000);


// nav menu toggler
navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('active');
    listContainer.classList.toggle('active');
});

// nav scroll background color change
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        navScroll.classList.add("nav-scroll");
    } 
    else {
        navScroll.classList.remove("nav-scroll");
    }
};