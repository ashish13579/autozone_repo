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
   
    for(var i=0;i<40;i++)
    {
   $("<div class='thumbnail' style='width:250px;height:250px;float:left;margin:15px; border:2px solid black;'></div>").appendTo(".main");
    }
});