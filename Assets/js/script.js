const buttonScroll = document.querySelector("#myBtn");
const itemNav = document.querySelectorAll(".nav-item");
window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop > 20){
        buttonScroll.style.display = "block";
    }
    else{
        buttonScroll.style.display = "none";
    }
});
