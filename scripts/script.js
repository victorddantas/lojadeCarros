const scrollNav = document.getElementById("navb")


//decreasing navbar

function navScroll() {
    if ( window.scrollY > 330) {
        scrollNav.style.padding="30px 70px";
    }
    else{
        scrollNav.style.padding="70px 80px";
    }

   
}
window.addEventListener("scroll" , function() {
    navScroll();
})