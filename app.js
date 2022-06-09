// const title = document.getElementById('mainTitle');
// console.log(ratingForm);

// const ratingsRes = document.getElementsByClassName('circle-value')
// console.log(ratingsRes);

// const form = document.getElementsByTagName('input');
// console.log(form);


// const valueRating = document.querySelectorAll('#5');
// console.log(valueRating);

const revealBtn = document.querySelector('.reveal');
const visibleContent = document.querySelector('.main-form');

const hiddenContent = document.querySelector('.thanks');

function revealContent(){

    if(visibleContent.classList.contains('reveal')
    ){
        visibleContent.classList.remove('reveal')
    } else {
        visibleContent.classList.add('reveal')
    }

    if(hiddenContent.classList.contains('reveal')
    ){
        hiddenContent.classList.remove('reveal')
    } else {
        hiddenContent.classList.add('reveal')
    }
}

// revealBtn.addEventListener('click', revealContent);

// document.getElementsByName("Thing")[0].addEventListener('change', doThing);