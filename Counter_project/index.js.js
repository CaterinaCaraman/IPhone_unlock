//var Counter = document.getElementById("counter");
//var Plus = document.getElementById("plus");
//var Minus = document.getElementById("minus");

var Counter = 0;
function plus() {
    count += 1;
    document.getElementById('counter').innerHTML = count;
}

function minus() {
    count -= 1;
    document.getElementById('counter').innerHTML = count;
}

/*Plus.onclick = function() {
    count += 1;
    Counter.innerHTML = count;
  };
  Minus.onclick = function() {
    count -= 1;
    Counter.innerHTML = count;
  };