var amongUsImg = document.getElementById('among-us');
var clickSound = new Audio('sus.mp3');

amongUsImg.addEventListener('click', function() {
  clickSound.play();
});
