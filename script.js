$(function(){ //sayfa tamamen yuklendikten sonra acilacak


    var svg=Pablo('#ground').svg({ //svg icin yukseklik ve wid ayari
        width: 1100,
        height: 750

    });

    var ball;
    var ballX=550;
    var ballY=500;
    var ballR=10;

    var locationX1=0;
    var locationX2=1100;

    var locationY1=0;
    var locationY2=750;

    ball=svg.circle({ //circle olusturan method
        cx:ballX,
        cy:ballY,
        r:ballR,
        fill:'#060'
    });

    var directionArr=[1,-1];

    var directionX=directionArr[Math.floor(Math.random()*2)];
    var directionY=directionArr[Math.floor(Math.random()*2)];

    var player;
    var playerX=500;
    var playerY=700;

    player=svg.rect({
        x:playerX,
        y:playerY,
        width:240,
        height:40,
        fill:'#FF7A4D'
    })

    setInterval(function(){

        // ball.attr({cx:ballX,cy:ballY});

        ball.remove();
        ball=svg.circle({ //circle olusturan method
            cx:ballX,
            cy:ballY,
            r:ballR,
            fill:'#060'
        });

        ballX=ballX+directionX;
        ballY=ballY+directionY;

        if(ballX==locationX1+10 || ballX==locationX2-10){
            directionX=directionX*-1;
        }

        if(ballY==locationY1+10 || ballY==locationY2-10){
            directionY=directionY*-1;
        }

        if(ballY==690 && (ballX>playerX-10 && ballX<playerX+250)){
            directionY=directionY*-1;
        }


    },2)

    $(document).mousemove(function(event){

        playerX=event.clientX;

        if(playerX<860) {
            player.attr({x:playerX});
        }
                  
    })

    $(document).keydown(function(event){

        var code = event.which;

        if(code==37){
            playerX=playerX-10;
            if(playerX>0)
                player.attr({x:playerX});
        }
        if(code==39){
            playerX=playerX+10;
            if(playerX<860)
                player.attr({x:playerX});
        }

    })

    // console.log(ball);

})