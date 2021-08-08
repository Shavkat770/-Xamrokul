var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot")
    var dots_1 = document.getElementById("dot_1")
    var dots_2 = document.getElementById("dot_2")
    var dots_3 = document.getElementById("dot_3")

    if(n >slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i=0; i <slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].style.backgroundColor = "black"
    dots[slideIndex].style.backgroundColor = "gray"
    dots[slideIndex+1].style.backgroundColor = "gray"
    
}
