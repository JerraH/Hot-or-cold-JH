
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('li .new').click(function() {
  		var q = confirm("Do you really want to start a new game?");
  		if (q == true) {
	  		$("#userGuess").val('');
			$('#feedback').val('');
			$("#feedback").text("Make Your Guess!");
			$('#count').text(0);
			$('#guessList').children().remove();
			hidNum = Math.floor((Math.random() * 100)+1);
			console.log(hidNum);
			i=1;
		}
	});

  	// Define variables
	var hidNum = Math.floor((Math.random() * 100)+1),
  		i = 1,
  		oldDiff;

// When submitted, the form should do...

	$('form').submit(function(event) {
		event.preventDefault();
		var guesNum = parseInt($('#userGuess').val()),
		diff = Math.abs(guesNum - hidNum);
		if (!guesNum) {
			alert("Please enter a number between 1 and 100!");
			$("#userGuess").val('');
			return;
		};
		if (guesNum > 100 || guesNum < 1) {
  			alert('Please enter a number between 1 and 100!');
  			$("#userGuess").val('');
  			return;
  		}

  		console.log(hidNum);

		// changing count
		$('#count').empty();
		$('#count').append(i);

		// testing testing
  		console.log('the current difference is' + ' ' + diff);


// defining all functions 
		function addList() {$('.guessBox').append('<li class="guess">' + guesNum + '</li>');};
							// adds your guesses to the list at the bottom of the page 

			function colderOrHotter() {
							// this one should tell you if your latest guess is closer or further away than the one before
				function feedback(msg) {
									// This function will provide feedback in the feedback console when you make a new guess
					$('#feedback').val('');
					$('#feedback').append(msg);
				};

				console.log('The old difference is' + ' ' + oldDiff);

				if (i == 1) {
					return;
				}
				else if (diff > oldDiff ) {
					$('#feedback').text("You're getting colder...");
				}
				else if (diff < oldDiff) {
					$('#feedback').text("Warmer...");
				}

				else if (oldDiff === diff) {
					$('#feedback').text("Don't guess the same number twice in a row!");
				};
			};

  			function compare() {
		if	(diff == 0) {
  			var r = confirm("So hot you make a dragon wanna RETIRE, yo.  What do you say?  Go again?");
					if (r == true) {
							$("#userGuess").val('');
							$('#feedback').val('');
							$("#feedback").text("Make Your Guess!");
							$('#count').text(0);
							$('#guessList').children().remove();
							hidNum = Math.floor((Math.random() * 100)+1);
							console.log(hidNum);
							i=1;
							return;
						}
						else {
							i++
    						return;
							};	
						}
  		
  			// if more than fifty apart
  		else if (diff > 50) {
  			colderOrHotter();
  			alert("You're ice cold!");
  			addList();
  			$("#userGuess").val('');
  			i++;
			console.log(oldDiff);
  		}
// if more than 25
  		else if (diff > 25) {
  			colderOrHotter();
  			alert("Eh, pretty lukewarm...");
  			addList();
  			$("#userGuess").val('');
  			i++;
			console.log(oldDiff);
  		}
// if more than 10
  		else if (diff > 10) {
  			colderOrHotter();
  			alert('Is it getting a little warm in here or is it just me?');
  			addList();
  			$("#userGuess").val('');
  			i++;
			console.log(oldDiff);
  		}

// if less than 10 
  		else if (diff < 10) {
  			colderOrHotter();
  			alert("Whoa, gettin' pretty hot there, cowboy!");
  			addList();
  			$("#userGuess").val('');
  			i++;
			console.log(oldDiff);
  		}

  		else if (diff < 5) {
  			colder0rHotter();
  			alert("So close you can almost smell it.")
  			addList();
  			$("#userGuess").val('');
  			i++;
			console.log(oldDiff);
  		}

  		else if (diff <3) {
  			colder0rHotter();
  			alert("You're on FIRE, yo!")
  			addList();
  			$("#userGuess").val('');
  			i++;
			console.log(oldDiff);
  		}
  	};

  	compare();
 	
oldDiff = diff;
  });
	});


