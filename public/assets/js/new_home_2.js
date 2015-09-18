alert(window.innerWidth);

var urls=["assets/img/home2/1.png","assets/img/home2/2.png","assets/img/home2/3.png","assets/img/home2/4.png"];
var ticker=0;

var background_change=setInterval(function(){
    
    if(ticker==4)
        ticker=0;
    
    $(".a").css("background-image","url("+urls[ticker]+")");
    ticker++;
    
},3000);