//Fish behaviour start
function move(id,x,y) {
  let str = "#" + id;
  $(str).animate({left: x, top: y});
}
function move(id) {
  let x, y;
  x = ((Math.random() * 200) - 100);
  y = ((Math.random() * 200) - 100);
  let str = "#" + id;
  $(str).animate({left: x, top: y});
}
//Fish behaviour end

//Buble behaviour start
function bubleUp() {
  $(".Buble").animate({top: "+=50"});
}
//Buble behaviour end

//Main loop start
$("#BlueFish").animate({left: 500, top: -250});
$("#GoldFish").animate({left: 500, top: -250});
for(let i = 0; i < 7; i++){
  //bubleUp();
  move("GoldFish");
  move("BlueFish");
}
//Main loop end
