///display reiew box in about section
let reviewWrapEl = document.querySelectorAll('.review-wrapper');
let currentReviews = [0,2];



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
