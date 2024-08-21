let icon = document.getElementById("icon");
let btn = document.getElementById("btn");

icon.addEventListener('mouseover',()=>{
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
    btn.style.backgroundColor='rgb(255, 99, 132)';

});
icon.addEventListener('mouseout',()=>{
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    btn.style.backgroundColor='rgb(132, 143, 235)'

})


