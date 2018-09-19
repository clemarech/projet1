let subBtnElement = document.getElementById('subBtn');
// ****** Message when message sent ******
function subForm() {
    alert('Votre message a bien été envoyé.')
}

// ****** Toggle NewsFeed on clik ******

const imgNews1Elt = document.querySelectorAll('.feedImg');
const textNews1Elt = document.querySelectorAll('.newsText');

for (let i = 0; i < imgNews1Elt.length; i++) {
    imgNews1Elt[i].addEventListener('click', function(e) {
        textNews1Elt[i].classList.toggle("jsToggle"); 
    })
}

// ****** Toggle Reversed SideMenu on clik ******

const foodBtn = document.querySelector('#food-menu');
const artBtn = document.querySelector('#art-menu');
const stairsBtn = document.querySelector('#stairs-menu');

const foodElt = document.querySelectorAll('.food');
const artElt = document.querySelectorAll('.art');
const stairsElt = document.querySelectorAll('.stairs');

    // ****** Toggle Reversed SideMenu Food on clik ******
    foodBtn.addEventListener('click', function() {

        for (let i = 0; i < artElt.length; i++) {
            artElt[i].classList.add("jsToggleReversed");
        }
        for (let i = 0; i < stairsElt.length; i++) {
            stairsElt[i].classList.add("jsToggleReversed");
        }

        for (let i = 0; i < foodElt.length; i++) {
            foodElt[i].classList.remove("jsToggleReversed");
        }

        // if (foodElt.classList.contains('jsToggleReversed')) {
        //     for (let i = 0; i < foodElt.length; i++) {
        //         foodElt[i].classList.remove('jsToggleReversed');
        //     }
        // }
    });

    // ****** Toggle Reversed SideMenu Art on clik ******
    artBtn.addEventListener('click', function() {

        for (let i = 0; i < foodElt.length; i++) {
            foodElt[i].classList.add("jsToggleReversed");
        }
        for (let i = 0; i < stairsElt.length; i++) {
            stairsElt[i].classList.add("jsToggleReversed");
        }

        for (let i = 0; i < artElt.length; i++) {
            artElt[i].classList.remove("jsToggleReversed");
        }
        // if (artElt.classList.contains('jsToggleReversed')) {
        //     for (let i = 0; i < artElt.length; i++) {
        //         artElt[i].classList.remove('jsToggleReversed');
        //     }
        // }


    });

    // ****** Toggle Reversed SideMenu Stairs on clik ******
    stairsBtn.addEventListener('click', function() {

        for (let i = 0; i < artElt.length; i++) {
            artElt[i].classList.add("jsToggleReversed");
        }
        for (let i = 0; i < foodElt.length; i++) {
            foodElt[i].classList.add("jsToggleReversed");
        }
        for (let i = 0; i < stairsElt.length; i++) {
            stairsElt[i].classList.remove("jsToggleReversed");
        }
        // if (stairsElt.classList.contains('jsToggleReversed')) {
        //     for (let i = 0; i < stairsElt.length; i++) {
        //         stairsElt[i].classList.remove('jsToggleReversed');
        //     }
        // }

    });




