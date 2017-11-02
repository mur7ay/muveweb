$(function () {
  count = 0;
  wordsArray = ["effortless", "affordable", "transparent", "quick"];
  setInterval(function () {
    count++;
    $("#bv").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 2000);
});

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var learnMoreBtn = document.getElementById('getMoreInfo');
var getStartedBtn = document.getElementById('getStartedBtn');

learnMoreBtn.onclick = function() {
  window.location.href = 'https://medium.com/@shawnmurray_45503/understanding-our-services-942d5248cb02';
}

getStartedBtn.onclick = function() {
  window.location.href = 'jobSelection.html';
}
