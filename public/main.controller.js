app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
  FlashCardsFactory.getFlashCards()
    .then(function(cards) {
      $scope.flashCards = cards;
			$scope.numCorrect = 0;
			$scope.numWrong = 0;
    });

  $scope.answerQuestion = function(answer, flashCard) {
    if (!flashCard.answered) {
      flashCard.answered = true;
      flashCard.answeredCorrectly = answer.correct;
			answer.correct ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
    }
  }

  $scope.categoryFinder = function(category) {
    FlashCardsFactory.getFlashCards(category)
      .then(function(cards) {
        $scope.flashCards = cards;
				$scope.selectedCat = category;
      });
  }

	$scope.resetAll = function(){
		FlashCardsFactory.getFlashCards()
	    .then(function(cards) {
	      $scope.flashCards = cards;
				$scope.selectedCat = null;
	    });
	}

  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];


});
