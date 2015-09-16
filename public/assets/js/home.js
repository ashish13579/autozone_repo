$(document).ready(function(){
    

});

var slider_effect=setInterval(function(){
    
    var currentSlide=$(".active-slide");
    var nextSlide=currentSlide.next();
    
    var currentDot=$(".active-dot");
    var nextDot=currentDot.next();
    
    if(nextSlide.length===0)
    {
        nextSlide=$(".slide").first();
        nextDot=$(".dot").first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    
},4000);
