

const parallax = document.getElementById('parallax');

window.addEventListener('scroll', scrollin);

function scrollin() {
    let offset = window.pageYOffset;
    // console.log('Offset: ' + offset);
    // console.log('Offset * 0.7: ' + offset*0.7);
    parallax.style.backgroundPositionY = offset * 0.75 + 'px';
};