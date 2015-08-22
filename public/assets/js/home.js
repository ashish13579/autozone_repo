$(document).ready(function(){
    
    $("navbar-nav li a").hover(function(){
        $("navbar-nav li").removeClass("active");
        $(this).addClass("active");
        
    });
    
});