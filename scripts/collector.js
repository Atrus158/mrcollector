$("document").ready( function () {

	var currentDeck = 0, currentSky = 0, currentMonster = 0;
	var carouselArray = [cards[currentDeck].length-2, cards[currentDeck].length-1, 0, 1, 2];

	$(".linkBox").on("click", function () {
		var scrollTarget = "#section" + this.id;
		$('html,body').animate({scrollTop: $(scrollTarget).offset().top},'slow');
	});

	$("#sectionAArrowUp").on("click", function() { $('html,body').animate({scrollTop: $("#header").offset().top},'slow');});
	$("#sectionAArrowDown").on("click", function() { $('html,body').animate({scrollTop: $("#sectionB").offset().top},'slow');});
	$("#sectionBArrowUp").on("click", function() { $('html,body').animate({scrollTop: $("#sectionA").offset().top},'slow');});
	$("#sectionBArrowDown").on("click", function() { $('html,body').animate({scrollTop: $("#sectionC").offset().top},'slow');});
	$("#sectionCArrowUp").on("click", function() { $('html,body').animate({scrollTop: $("#sectionB").offset().top},'slow');});

	$("#sleek").on("click", function () {
		$(".sections").css("background-size", "auto");
		$(".sections").css("background-repeat", "repeat");

		$("#header").css("background-image", "url(images/backgrounds/drawer_sleek.jpg)");
		$("#sectionA").css("background-image", "url(images/backgrounds/card_background_02.jpg)");
		$("#sectionB").css("background-image", "url(images/backgrounds/castle_wall.jpg)");
		$("#sectionC").css("background-image", "url(images/backgrounds/hexagons.jpg)");

		$("#A").css("background-image", "url(images/backgrounds/card_background_02_small.jpg)");
		$("#B").css("background-image", "url(images/backgrounds/castle_wall_small.jpg)");
		$("#C").css("background-image", "url(images/backgrounds/hexagons_small.jpg)");

		$(".linkBox").css("color", "black");
		$(".linkBox").css("font-weight", 900);
	});

	$("#antique").on("click", function () {
		$(".sections").css("background-size", "cover");

		$("#header").css("background-image", "url(images/backgrounds/chest10.jpg)");
		$("#sectionA").css("background-image", "url(images/backgrounds/card_back_antique.jpg)");
		$("#sectionB").css("background-image", "url(images/backgrounds/skylander_back.jpg)");
		$("#sectionC").css("background-image", "url(images/backgrounds/hex_back.jpg)");

		$("#A").css("background-image", "url(images/backgrounds/card_back_antique.jpg)");
		$("#B").css("background-image", "url(images/backgrounds/skylander_back.jpg)");
		$("#C").css("background-image", "url(images/backgrounds/hex_back.jpg)");

		$(".linkBox").css("color", "white");
		$(".linkBox").css("font-weight", 200);
	});


	function displayCarousel() {
		var little1 = "url(images/decks/" + decks[currentDeck] + "/" + cards[currentDeck][carouselArray[0]] + ".gif)";
		var medium1 = "url(images/decks/" + decks[currentDeck] + "/" + cards[currentDeck][carouselArray[1]] + ".gif)";
		var bigCard = "url(images/decks/" + decks[currentDeck] + "/" + cards[currentDeck][carouselArray[2]] + ".gif)";
		var medium2 = "url(images/decks/" + decks[currentDeck] + "/" + cards[currentDeck][carouselArray[3]] + ".gif)";
		var little2 = "url(images/decks/" + decks[currentDeck] + "/" + cards[currentDeck][carouselArray[4]] + ".gif)";

		$("#little1").css("background", little1);
		$("#medium1").css("background", medium1);
		$("#bigCard").css("background", bigCard);
		$("#medium2").css("background", medium2);
		$("#little2").css("background", little2);

		$(".cards").css("background-size", "contain");
		$(".cards").css("background-repeat", "no-repeat");
	}

	function displayCards(currentDeck) {
		var frontOfDeck="";
		var backOfDeck="";

		frontOfDeck = "images/decks/" + decks[currentDeck] + "/front.jpg";
		backOfDeck = "images/decks/" + decks[currentDeck] + "/back.jpg";

		$("#deckFront").attr("src", frontOfDeck);
		$("#deckBack").attr("src", backOfDeck);

		/* Reset carouselArray */
		carouselArray = [cards[currentDeck].length-2, cards[currentDeck].length-1, 0, 1, 2];
		displayCarousel();
	}

	displayCards(currentDeck);

	$("#deckArrowLeft").on("click", function () {
		currentDeck = currentDeck - 1;
		if (currentDeck == -1) { currentDeck = decks.length-1; }
		displayCards(currentDeck);
	});

	$("#deckArrowRight").on("click", function () {
		currentDeck = currentDeck + 1;
		if (currentDeck == decks.length) { currentDeck = 0; }
		displayCards(currentDeck);
	});

	(function(){

		var flipButton = document.getElementById("flipButton");

		function flipCard() {
			var cardToFlip = document.getElementById("card");
			cardToFlip.classList.toggle("flip");
		}

		flipButton.addEventListener("click", flipCard);

	}());

	function moveCarousel(increment) {
		if (increment > 0) {
			for (a=0; a<increment; a++) {

				/* Update carouselArray with new values */
				for (i=4; i>=0; i--) {
					if (carouselArray[i]==0) { 
						carouselArray[i]=cards[currentDeck].length-1;
					} else {
						carouselArray[i]=carouselArray[i]-1;
					}
					displayCarousel();
				}
			}
		} else {
			for (a=0; a>increment; a--) {

				/* Update carouselArray with new values */
				for (i=0; i<=4; i++) {
					if (carouselArray[i]==cards[currentDeck].length-1) { 
						carouselArray[i]=0;
					} else {
						carouselArray[i]=carouselArray[i]+1;
					}
					displayCarousel();
				}
			}
		}
	}

	$("#carouselArrowLeft").on("click", function () {
		moveCarousel(-1);
	});
	$("#carouselArrowRight").on("click", function () {
		moveCarousel(1);
	});
	$("#little1").on("click", function () {
		moveCarousel(2);
	});
	$("#medium1").on("click", function () {
		moveCarousel(1);
	});
	$("#medium2").on("click", function () {
		moveCarousel(-1);
	});
	$("#little2").on("click", function () {
		moveCarousel(-2);
	});

	function displaySky(currentSky) {
		var skyUrl = "url(images/sky_cards/" + skylanders[currentSky].name + ".gif)";
		var guyUrl = "url(images/skylanders/" + skylanders[currentSky].name + ".gif)";
		
		$("#skyCards").css("background-image", skyUrl);
		$("#skylander").css("background-image", guyUrl);

		$("#skylanderBubble").css("background", "-webkit-radial-gradient(white," + skylanders[currentSky].color + ")");
		$("#skylanderBubble").css("background", "-o-radial-gradient(white," + skylanders[currentSky].color + ")");
		$("#skylanderBubble").css("background", "-moz-radial-gradient(white," + skylanders[currentSky].color + ")");
		$("#skylanderBubble").css("background", "radial-gradient(white," + skylanders[currentSky].color + ")");
	}

	displaySky(currentSky);

	$("#skyArrowLeft").on("click", function () {
		currentSky = currentSky - 1;
		if (currentSky == -1) { currentSky = skylanders.length-1; }
		displaySky(currentSky);
	});

	$("#skyArrowRight").on("click", function () {
		currentSky = currentSky + 1;
		if (currentSky == skylanders.length) { currentSky = 0; }
		displaySky(currentSky);
	});

	function displayMonster(currentMonster) {
		var reaperUrl = "";

		reaperUrl = "url(images/miniatures/" + monsters[currentMonster].image + ")";
		$("#reaperDisplay").css("background-image", reaperUrl);
		$("#monsterName").html(monsters[currentMonster].name);
		$("#monsterArtist").html("Artist: " + monsters[currentMonster].artist);
		$("#monsterPart").html("Part # " + monsters[currentMonster].part_number);
	}

	displayMonster(currentMonster);

	$("#leftArrow").on("click", function () {
		currentMonster = currentMonster - 1;
		if (currentMonster == -1) { currentMonster = monsters.length-1; }
		displayMonster(currentMonster);
	});

	$("#rightArrow").on("click", function () {
		currentMonster = currentMonster + 1;
		if (currentMonster == monsters.length) { currentMonster = 0; }
		displayMonster(currentMonster);
	});

	$("#leftArrow").mouseenter(function() {
	    this.src="images/arrows/arrow_brick_left_yellow.gif";
  	});
  	$("#leftArrow").mouseleave(function() {
    	this.src="images/arrows/arrow_brick_left.gif";
  	});

	$("#rightArrow").mouseenter(function() {
	    this.src="images/arrows/arrow_brick_right_yellow.gif";
  	});
  	$("#rightArrow").mouseleave(function() {
    	this.src="images/arrows/arrow_brick_right.gif";
  	});

});



