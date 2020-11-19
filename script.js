(function() {
  var winnerButtons = document.querySelectorAll('.winner-button');
  var scores = {
    x: 0,
    o: 0
  };

  winnerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var winner = button.getAttribute('data-winner');
      var score = document.querySelector('#' + winner + '-score');

      scores[winner] = scores[winner] + 1;
      score.innerText = scores[winner];

      // TO DO: Reset the playing board!
    });
  });
}());
