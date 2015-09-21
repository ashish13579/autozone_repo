alert(window.innerWidth);

var urls=["assets/img/home2/1.png","assets/img/home2/2.png","assets/img/home2/3.png","assets/img/home2/4.png"];
var ticker=0;

var background_change=setInterval(function(){
    
    var currentSlide=$(".active-slide");
    var nextSlide=currentSlide.next();
    
    if(nextSlide.length===0)
    {
        nextSlide=$(".slide").first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
    
},3000);