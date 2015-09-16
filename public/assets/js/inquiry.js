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
});