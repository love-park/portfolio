// selects all elements with animation class
const images = document.querySelectorAll('.animateDown, .animateUp, .animateLeft, .animateRight, .stagDelay');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entries);
        if (entry.intersectionRatio > 0) {
            if (entry.target.classList.contains('animateDown')) {
                entry.target.style.animation = `animDown 2s ${entry.target.dataset.delay} forwards ease-out`;
            } else if (entry.target.classList.contains('animateUp')) {
                entry.target.style.animation = `animUp 2s ${entry.target.dataset.delay} forwards ease-out`;
            } else if (entry.target.classList.contains('animateLeft')) {
                entry.target.style.animation = `animLeft 2s ${entry.target.dataset.delay} forwards ease-out`;
            } else if (entry.target.classList.contains('animateRight')) {
                entry.target.style.animation = `animRight 2s ${entry.target.dataset.delay} forwards ease-out`;
            } else if (entry.target.classList.contains('stagDelay')) {
                entry.target.style.animation = `stagDel 2s ${entry.target.dataset.delay} forwards ease-out`;
            }
        } else {
            entry.target.style.animation = 'none';
        }
    })
});

images.forEach(image => {
    observer.observe(image)
});
