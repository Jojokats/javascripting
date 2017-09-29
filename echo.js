function echo(str, num) {
  for(var i = 1; i <= num; i++) {
    console.log(str);
  }
}

echo("Echo!!!", 10) //should print "Echo!!!" 10 times
echo("Tater tots", 3) //should print "Tater tots" 3 times

var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

var hues = ["lime", "violet", "aqua", "tangerine"];

hues.forEach(function(iLoveDogs) {
  console.log("inside the forEach " + iLoveDogs);
});

function printColor(color) {
  console.log("************");
  console.log(color);
  console.log("************");
}
printColor("blue");

hues.forEach(printColor);
