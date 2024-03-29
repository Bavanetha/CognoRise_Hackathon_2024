/*splash screen*/
// Hide the splash screen after some time
/*var splashScreen = document.getElementById('splash-screen');
window.onload = function() {
    setTimeout(hideSplashScreen, 3000); // Change the time (in milliseconds) as needed
};

function hideSplashScreen() {
    
    splashScreen.style.display = 'none';
    
}*/




//when page is loading
document.addEventListener("DOMContentLoaded", function() {
    // Show splash screen
    document.getElementById("splash-screen").style.display = "block";

    // Hide splash screen and show main content after the page has loaded
    window.addEventListener("load", function() {
        // Hide splash screen
        document.getElementById("splash-screen").style.display = "none";
        // Show main content
        document.getElementById("content").style.display = "block";
    });
});


//mobile scrren navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close = document.getElementById('close');


if(bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add('active');
    })
}

    if(close){
    close.addEventListener('click' , () =>{
        nav.classList.remove('active');
    })
}

//countDown
var countDown = new Date ("April 15,2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;

    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 *60));
    var seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
},1000); 


//image gallarey
var val1 = document.getElementById("MainImage");
var val2 = document.getElementsByClassName("small-img");

val2[0].onclick = function(){
    val1.src = val2[0].src;
}

val2[1].onclick = function(){
    val1.src = val2[1].src;
}

val2[2].onclick = function(){
    val1.src = val2[2].src;
}

val2[3].onclick = function(){
    val1.src = val2[3].src;
}

var cart = document.getElementById("add");
cart.onclick = function(){
    alert("Item added to cart");
}

//shop button
document.getElementById('shop_button').addEventListener('click', function() {
    window.location.href = 'shop.html';
  });