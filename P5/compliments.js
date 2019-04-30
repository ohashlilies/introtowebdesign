$(document).ready(function() {
});

var guesses = '';
complimentGuess();

function complimentGuess() {


	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		var guess = $('input').val();
		guesses += guess + ' ';
		$('.guesses p').text(guesses);
		console.log(guess);
		if (guess == "yes") {
      var  complimentArray = ["You're cute.", "I'm so happy you exist!", "You are empowering.", "You inspire me.", "I love your authenticity", "I wish there were more people like you.", "You make the world a better place by simply existing.", "Your smile is contagious.", "Your personality is refreshing.", "You are such a joy to be around!", "You are all kinds of wonderful—thank you for existing.", "You are so gorgeous!!!", "Are you a camera? Because every time I look at you, I smile.", "If you were a vegetable, you would be a cute-cumber.", "Do you have a sunburn or are you always this hot?", "If you were a flower, you'd be a damn-delion.", "You are an absolute gift to those around you.", "You're a smart cookie!", "You are so appreciated.", "You are the most perfect you there is.", "You light up the room.", "Your gorgeousness redefines art.", "Your laughter is infectious.", "You are irreplaceable.", "Your taste in music is 10/10.", "I bet you can make Kanye West smile.", "You are vibrant.", "You are more than enough.", "Thank you for all of the little things you do that go unnoticed.", "You should be thanked more often. So thank you!"];
    var randomNumber = Math.floor(Math.random() * complimentArray.length);
    var stripped = complimentArray[randomNumber];
    console.log(complimentArray[randomNumber]);
    console.log(stripped);
			$('h1').text(stripped);
      $('h2').text(' Would you like another compliment?');
			$('input').val('');
			$('.button p').text('Submit');
			//$('#submit').click(function() {
			//	location.reload(true);
			//});
		} else if (guess == "no") {
			$('h1').text(' How about now?');
			$('input').val('');
			$('.button p').text('Submit');
			$('#submit').click(function() {
			    var input = $('input').val();
			    var guess = input.toLowerCase();
			    console.log(guess);
			});
    } else {
      $('h1').text(' Oopsies! Sorry, did you mean, "yes"?');
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
