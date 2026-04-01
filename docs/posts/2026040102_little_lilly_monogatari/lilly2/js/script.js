/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	"kiss": "kiss.png",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"forest": "forest1.jpg",
});


// Define the Characters
monogatari.characters ({
	"lilly": {
		name: "Little Lilly",
		color: "#f57e07",
		sprites: {
			normal: "lilly_neutral.png",
			smiling3: "lilly_smiling03.png",
			talking1: "lilly_talking01.png",
			talking2: "lilly_talking02.png",
			talking3: "lilly_talking03.png",
			talking8: "lilly_talking08.png",
			embarrassed1: "lilly_embarrassed01.png",
			cries1: "lilly_cries01.png",
			angry1: "lilly_angry01.png",
			angry4: "lilly_angry04.png",
			happy4: "lilly_happy04.png",
			shy: "lilly_shy02.png",
		}
	}
});

monogatari.script ({
	// The game starts here.
	"Start": [
		"show scene forest with fadeIn",
		"show character lilly normal at right with fadeIn duration 3s",
		" ",
		"show character lilly smiling3 at right",
		"lilly Hallo, schöner Fremder!",
		"show character lilly talking1 at right",
		"lilly Es ist nicht immer einfach, eine Figur in einem Spiel zu sein,",
		"show character lilly talking3 at right",
		"lilly Man ist oft sehr allein und niemand spricht mit einem.",
		"show character lilly talking8 at right",
		"lilly Aber jetzt bist Du ja hier.",
		"show character lilly talking2 at right",
		"show character lilly shy at right",
		{
			'Choice': {
				"Dialog": "lilly Gib mir einen kleinen Kuß. 😘",
				"Yes": {
					"Text": "Schmatz!",
					"Do": "jump Yes",
				},
				"No": {
					"Text": "Ich habe jetzt leider keine Zeit",
					"Do": "jump No",
				}
			}
		}
	],

	"Yes": [
	
		"show character lilly embarrassed1 at right",
		"show image kiss at center with fadeIn",
		" ",
		"hide image kiss with fadeOut duration 5s",
		" ",
		"lilly Oooh!",
		"show character lilly happy4 at right",
		"lilly Das ist der Beginn einer wunderbaren Freundschaft.",
		"hide character lilly with fadeOut duration 2s",
		" ",
		"Fortsetzung folgt (vielleicht).",

	],

	"No": [
		"show character lilly cries1 at right",
		"lilly Ich sagte es doch, niemand liebt eine Spielefigur",
		"show character lilly angry1 at right",
		"lilly Du bist auch nicht besser als die anderen Kerle!",
		"show character lilly angry4 at right",
		"lilly Scher Dich zum Teufel!",
		"hide character lilly with fadeOut duration 2s",
		" ",
		"Ein böses Ende hat keine Fortsetzung.",



	]
});