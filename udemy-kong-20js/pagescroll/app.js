const progressEl = document.querySelector('.progress');
window.onscroll = () => scrollProgress();

function scrollProgress() {
    const scroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolltop = document.documentElement.scrollTop;
    const scrolled = (scrolltop / scroll) * 100;
    progressEl.style.visibility = 'visible';
    progressEl.style.width = scrolled + '%';
}
