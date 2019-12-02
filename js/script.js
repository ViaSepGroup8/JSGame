//Global vars
var bottom = $("#aquarium").height();
var aquariumWidth = $("#aquarium").width();
var aquariumHeight = $("#aquarium").height();

//Update on resize
$(window).resize(function () {
bottom = $("#aquarium").height();
aquariumWidth = $("#aquarium").width();
aquariumHeight = $("#aquarium").height();
});

nth = function () {alert("nothung")}

moveFish = function(id, moveX, moveY, speed, cb){
    var w = $(id).width();
    var h = $(id).height();
    //alert(moveX + " " + moveY)
    
    //Mirror (flip) image
    if(moveX < $(id).position().left+w/2){
        $(id).addClass('mirror');
    }else{
        $(id).removeClass('mirror');
    }
    
    //Move the fish
    $(id).stop().animate({
        left: moveX-w/2,
        top: moveY-h/2
    },speed,cb);
}

//Randomly move fish

//FISH 1
moveRandomly1 = function(){
    var randomX = Math.floor(Math.random() * aquariumWidth);
    var randomY = Math.floor(Math.random() * aquariumHeight);
    moveFish("#fish1Id", randomX, randomY, 4000, moveRandomly1);
}
moveRandomly1();

//FISH 2
moveRandomly2 = function(){
    var randomX = Math.floor(Math.random() * aquariumWidth);
    var randomY = Math.floor(Math.random() * aquariumHeight);
    moveFish("#fish2Id", randomX, randomY, 3000, moveRandomly2);
}
moveRandomly2();

//Move fish 1 on click
$("#aquarium").click(function (e) { 
    var clickX = e.pageX;
    var clickY = e.pageY;
    moveFish("#fish1Id", clickX, clickY, 1000, moveRandomly1);
});

//Make fish bigger on dblclick
$("#fish1Id").dblclick(function(){
    $(this).stop().animate({height: '50%'},1000).delay(800).animate({height: '30%',},1000, moveRandomly1)
}); 

//Fish 2 escape mouse
$("#fish2Id").mouseenter(function(){
    var randomX = Math.floor(Math.random() * aquariumWidth);
    var randomY = Math.floor(Math.random() * aquariumHeight);
    moveFish("#fish2Id", randomX, randomY, 800, moveRandomly2);
}); 

//BUBBLES BUBBLES BUBBLES

//Move bubble
moveBubble = function(id, delay){
    if(delay){
        setTimeout(function(){moveBubble(id)}, delay);
    }else{
    var bubble = $(id);
    var randomX = Math.floor(Math.random() * aquariumWidth);
    
    bubble.css("top", bottom + 100);
    bubble.fadeIn();
    bubble.css("left", randomX);
    bubble.stop().animate({top: - 100},10000,'linear',function(){moveBubble(id)});
    }
}

//Start moving all bubbles
var delayStart = 0;
$(".bubbleClass").each(function()
{
    var bubbleId = $(this).attr('id');
    moveBubble("#" + bubbleId, delayStart);
    delayStart+=1000;
});

$(".bubbleClass").click(function (e) { 
    $(this).fadeOut();
});





