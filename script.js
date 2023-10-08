//side menu toggle
document.getElementById("menuToggle").addEventListener("click", function () {
  if (document.getElementById("sidenav").style.display == "none") {
    document.getElementById("sidenav").style.removeProperty("display");
  } else {
    document.getElementById("sidenav").style.display = "none";
  }
});

//annotation menu toggle
document.getElementById("dropdown").addEventListener("click", function () {
  if (document.getElementById("dropdownMenu").style.display == "block") {
    document.getElementById("dropdownMenu").style.display = "none";
  } else {
    document.getElementById("dropdownMenu").style.display = "block";
  }
});

//change div to update contents to chat replay
document.getElementById("chatReplay").addEventListener("click", function () {
  document.getElementById("panel").innerHTML = "";
  document.getElementById("panel").innerHTML = "<h4><b>Chat Replay:</b></h4><p>PPP Won</p><p>PPP Won</p><p>FELTED</p><p>PPP Won</p><p>RALPH FELTED</p>";
});

//change div to update contents to All Annotations
document.getElementById("allAnnotations").addEventListener("click", function () {
  document.getElementById("panel").innerHTML = "";
  document.getElementById("panel").innerHTML =
    '<h4><b>All Annotations:</b></h4><p>1:25:34</p><p>A gunt is a portmanteau between the words "gut" and "cunt" and is used to describe Ethan Ralph\'s Biforcated Navel<br /></p><p>Source: <a href="https://en.wiktionary.org/wiki/gunt">https://en.wiktionary.org/wiki/gunt</a></p>';
});

//change div to update contents to Live Annotations
document.getElementById("liveAnnotations").addEventListener("click", function () {
  document.getElementById("panel").innerHTML = "";
  document.getElementById("panel").innerHTML =
    '<h4><b>All Annotations:</b></h4><p>1:25:34</p><p>A gunt is a portmanteau between the words "gut" and "cunt" and is used to describe Ethan Ralph\'s Biforcated Navel<br /></p><p>Source: <a href="https://en.wiktionary.org/wiki/gunt">https://en.wiktionary.org/wiki/gunt</a></p>';
});
