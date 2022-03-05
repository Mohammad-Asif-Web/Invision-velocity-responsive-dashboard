window.addEventListener('scroll', function(){
    const header = document.querySelector('.row');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// notification bar 
const bell = document.getElementById("bell");
const notifi = document.getElementById("notifi");
console.log(bell, notifi)

// bell.addEventListener('click', ()=>{
//     notifi.style = "margin-right: -300px; transition: 0.5s linear"
// })
bell.addEventListener("click", ()=>{
    notifi.classList.toggle('toogle')
})

// clear notifications
const clear = document.getElementById('clear')
const message = document.getElementById('message')

clear.addEventListener('click', ()=>{
    message.style = "display: none"
})





