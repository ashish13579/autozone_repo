var slider_effect=setInterval(function(){
    
    var currentSlide=$(".active-slide");
    var nextSlide=currentSlide.next();
    
    if(nextSlide.length===0)
    {
        nextSlide=$(".slide").first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    
},4000);

$(document).ready(function(){
    
    $("#myNav").hide();
    var myNavLimit=window.innerHeight*0.15;
    
    $(window).scroll(function(){
        if($(window).scrollTop()>myNavLimit){
            $(".navtop").hide();
            $("#myNav").show();
        }
        else{
            $(".navtop").show();
            $("#myNav").hide();
        }
    });
   
    $(".img-pane").hover(function(){
        $(".left").show();
        $(".right").show();
    },function(){
        $(".left").hide();
        $(".right").hide();
    });
    
    $(".left").click(function(){
        var currentSlide=$(".active-slide");
        var prevSlide=currentSlide.prev();
        
        if(prevSlide.length===0)
        {
            prevSlide=$(".slide").last();
        }
        
        currentSlide.fadeOut("slow").removeClass('active-slide');
        prevSlide.fadeIn("slow").addClass('active-slide');
        
    });
    
    $(".right").click(function(){
        var currentSlide=$(".active-slide");
        var nextSlide=currentSlide.next();
        
        if(nextSlide.length===0)
        {
            nextSlide=$(".slide").first();
        }
        
        currentSlide.fadeOut("slow").removeClass('active-slide');
        nextSlide.fadeIn("slow").addClass('active-slide');
        
    });
    
});
