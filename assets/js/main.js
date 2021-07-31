window.addEventListener('scroll', function(){
    const header = document.querySelector('.row');
    header.classList.toggle("sticky", window.scrollY > 0);
});