//Fish behaviour start
function move(id,x,y) {
  var str = "#" + id;
  $(str).animate({left: x, top: y});
}
function move(id) {
  var x = ((Math.random() * 200) - 100);
  var y = ((Math.random() * 200) - 100);
  var str = "#" + id;
  $(str).animate({left: x, top: y});
}
//Fish behaviour end

//Buble behaviour start
function bubleUp() {
  $(".Buble").animate({top: "+=50"});
}
//Buble behaviour end

//Main loop start
var a = 1;
while(a == 1) {
  //bubleUp();
  move("GoldFish");
  delay(500);
  move("BlueFish");
  delay(500);
}
//Main loop end
