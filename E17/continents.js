$(document).ready(function() {
  $('.button').hover(function() {
  });

	var continentArray = ["North America", "South America", "Europe", "Africa", "Asia", "Australia", "Antarctica"];
	var randomNumber = Math.floor(Math.random() * continentArray.length);
	var stripped = continentArray[randomNumber].toLowerCase();

	console.log(continentArray[randomNumber]);
	console.log(stripped);

  var guesses = '';
  var none = '';


	$('#submit').click(function() {
		var input = $('input').val();
		var inputSplit = input.split(' ');
		var i;
		var guess = "";
		for (i=0;i < inputSplit.length; i++) {
				var word = inputSplit[i];
				guess += ' ' + word[0].toUpperCase() + word.slice(1);
		}
    guesses += guess + '  ';
    $('.guesses p').text(guesses);
		console.log(guess);
		if (guess.toLowerCase() == stripped || guess == continentArray[randomNumber]) {
			$('h1').text('You got it! ' + guess + " is correct!");
			$('input').text(guess);
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});

		} else if (guess == none){
      $('h1').text('Hint: There are 7 continents!');
      $('.button p').text('Guess');
  } else {
			$('h1').text('Sorry,' + guess + " is not correct.");
			$('input').val('');
			$('.button p').text('Try Again?');
		}
	});
});
/* $(document).ready(function() {
});

var guesses = '"North America", "South America", "Europe", "Africa", "Asia", "Australia", "north america", "south america", "europe", "africa", "asia", "australia"';
continentGuess();

function continentGuess() {

	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		var guess = $('input').val();
		guesses += guess + ' ';
		$('.guesses p').text(guesses);
		console.log(guess);
		if (guess == "North America", "South America", "Europe", "Africa", "Asia", "Australia", "north america", "south america", "europe", "africa", "asia", "australia") {
      var  continentArray = ["North America", "South America", "Europe", "Africa", "Asia", "Australia"];
    var randomNumber = Math.floor(Math.random() * continentArray.length);
    var stripped = continentArray[randomNumber];
    console.log(continentArray[randomNumber]);
    console.log(stripped);
			$('h1').text(stripped);
      $('h2').text('Correct! Play again?');
			$('input').val('');
			$('.button p').text('Submit');
			//$('#submit').click(function() {
			//	location.reload(true);
			//});
    } else {
      $('h1').text('Hmmm...try again!');
      $('input').val('');
      $('.button p').text('Submit');
      $('#submit').click(function() {
          var input = $('input').val();
          var guess = input.toLowerCase();
          console.log(guess);
      });
		}
	})
}

//$(document).ready(function() {
});
continentGuess();

var continentArray = ["North America", "South America", "Europe", "Africa", "Asia", "Australia", "north america", "south america", "europe", "africa", "asia", "australia"];

var randomNumber =
Math.floor()Math.random()	* continentArray[randomNumber].toLowerCase(); console.log(stripped); $('body').css('background-color', continentArray[randomNumber]);
$('#guess').click(function() { var input = $('input').val();
		var guess = input.toLowerCase();
		var guess = $('input').val(); guesses += guess + ' ';
		$('.guesses p').text(guesses);
		console.log(guess);
		if (guess == stripped || guess == continentArray[randomNumber])	{
			$('h1').text(guess+ 'is correct! Yay!');
			$('input').val('');
			$('.button p').text('Play again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is incorrect.');
			$('input').val('');
			$('.button p').text('Try Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
}*/

/* $(document).ready(function() {
});
continentGuess();

var continentArray =
["North America", "South America", "Europe", "Africa", "Asia", "Australia", "north america", "south america", "europe", "africa", "asia", "australia"];

var randomNumber =
Math.floor(Math.random()	*
continentArray[randomNumber].toLowerCase();
console.log(stripped);
$('body').css('background-color',
continentArray[randomNumber]);
	$('#guess').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		var guess = $('input').val();
		guesses += guess + ' ';
		$('.guesses p').text(guesses);
		console.log(guess);
		if (guess == stripped || guess == continentArray[randomNumber])	{
			$('h1').text(guess+ 'is correct! Yay!');
			$('input').val('');
			$('.button p').text('Play again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is incorrect.');
			$('input').val('');
			$('.button p').text('Try Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
} */
