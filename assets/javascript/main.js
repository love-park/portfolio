// Nav: change color on scroll
$(window).scroll(function() {
    var scrollPosition = 0;
    var navChange = $('#navbar');
    var offset = navChange.offset();
    if (navChange.length) {
        $(document).scroll(function() {
            scrollPosition = $(this).scrollTop();
            if (scrollPosition > offset.top) {
                $('.navbar').addClass('stationary');
            } else {
                $('.navbar').removeClass('stationary');
            }
        })
    }
});

// Typewriter Script
class Typewriter {
    constructor(textElement, words, wait = 3000) {
        this.textElement = textElement;
        this.words = words;
        this.text = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.erase = false;
    }
    type() {
        // current index of word
        const current = this.wordIndex % this.words.length;
        // full text of current word
        const fullText = this.words[current];
        // if erasing, remove char
        if (this.erase) { 
            this.text = fullText.substring(0, this.text.length - 1);
        // else, add char
        } else {
            this.text = fullText.substring(0, this.text.length + 1);
        }
        // insert text into element
        this.textElement.innerHTML = `<span class="text">${this.text}</span>`;
        // initial typeSpeed
        var typeSpeed = 200;
        // if erasing, cut typeSpeed
        if (this.erase) {
            typeSpeed /= 2;
        }
        // if word is fully typed out
        if (!this.erase && this.text === fullText) {
            // pause at the end and then start erase (set erase to true)
            typeSpeed = this.wait;
            this.erase = true;
        } else if (this.erase && this.text === '') {
            // end erase (set erase to false), go to next word, pause before start typing
            this.erase = false;
            this.wordIndex++;
            typeSpeed = 300;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}
// initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

function init() {
    const textElement = document.querySelector('.typewriter');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');
    // initialize TypeWriter
    new Typewriter(textElement, words, wait);
}

// Animation Script
if ("IntersectionObserver" in window) {
    // selects all elements with an animation class
    const items = document.querySelectorAll('.animateDown, .animateUp, .animateLeft, .animateRight, .stagDelay');
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entries);
            // runs if user initiates intersection on window 
            if (entry.intersectionRatio > 0) {
                // specifies which class runs the specified keyframe/animation, runs animation for that item once
                if (entry.target.classList.contains('animateDown')) {
                    entry.target.style.animation = `animDown 1s ${entry.target.dataset.delay} forwards ease-out`;
                    observer.unobserve(entry.target);
                } else if (entry.target.classList.contains('animateUp')) {
                    entry.target.style.animation = `animUp 1s ${entry.target.dataset.delay} forwards ease-out`;
                    observer.unobserve(entry.target);
                } else if (entry.target.classList.contains('animateLeft')) {
                    entry.target.style.animation = `animLeft 1s ${entry.target.dataset.delay} forwards ease-out`;
                    observer.unobserve(entry.target);
                } else if (entry.target.classList.contains('animateRight')) {
                    entry.target.style.animation = `animRight 1s ${entry.target.dataset.delay} forwards ease-out`;
                    observer.unobserve(entry.target);
                } else if (entry.target.classList.contains('stagDelay')) {
                    entry.target.style.animation = `stagDel 1s ${entry.target.dataset.delay} forwards ease-out`;
                    observer.unobserve(entry.target);
                }
            } else {
                entry.target.style.animation = 'none';
            }
        })
    });
    // runs through each element with the animation class and runs the specified animation
    items.forEach(item => {
        observer.observe(item);
    });
}