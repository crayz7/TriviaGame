var countdown = 31;
var intervalId = setInterval(timer, 1000);
var correct = 0;
var incorrect = 0;

function timer () {
	countdown--;
	if (countdown <= 0) {
		clearInterval(intervalId);
		$('#myForm').remove();
  		$('#correct').html('Correct: ' + correct);
 		$('#incorrect').html('Incorrect: ' + incorrect);
}
  $('#timeleft').html('Time remaining: ' + countdown + ' seconds');
}
 
$('#myForm input').on('change', function() {
   var answer1 = ($('input[name=group1]:checked', '#myForm').val());
   var answer2 = ($('input[name=group2]:checked', '#myForm').val());
   var answer3 = ($('input[name=group3]:checked', '#myForm').val());
   var answer4 = ($('input[name=group4]:checked', '#myForm').val());
   var answer5 = ($('input[name=group5]:checked', '#myForm').val());

	function checkAnswer() {
	  correct = 0;
	  incorrect = 0;

	  if (answer1 === '2') {
		correct++;
		
	} else {
		incorrect++;
		
		}

		if (answer2 === '3') {
		correct++;
		
	} else {
		incorrect++;
		
		}

		if (answer3 === '2') {
		correct++;
		
	} else {
		incorrect++;
		
		}

		if (answer4 === '1') {
		correct++;
		
	} else {
		incorrect++;
		
		}

		if (answer5 === '4') {
		correct++;
		
	} else {
		incorrect++;
		
		}

	}
	checkAnswer();
	console.log(correct);
	console.log(incorrect);

});


