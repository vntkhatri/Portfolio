var p = document.getElementById("text");
p.innerHTML = "";
var n = 0;
var str =
  "Agent 314: Your mission is to eliminate the threat posed by the agency of evilness, co.";
var typeTimer = setInterval(function () {
  n = n + 1;
  p.innerHTML = "> " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = "> " + str;
    n = 0;
    setInterval(function () {
      if (n === 0) {
        p.innerHTML = "> " + str + "|";
        n = 1;
      } else {
        p.innerHTML = "> " + str;
        n = 0;
      }
    }, 500);
  }
}, 60);
