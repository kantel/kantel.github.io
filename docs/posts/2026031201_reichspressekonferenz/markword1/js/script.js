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

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"pressekonferenz": "pressekonferenz.jpg",
});


// Define the Characters
monogatari.characters ({
	'sprecher': {
		name: 'Mark Wort',
		color: '#5bcaff',
		sprites: {
			normal: "markword_neutral01.png",
			talking1: "markword_talking01.png",
			talking2: "markword_talking02.png",
			talking4: "markword_talking04.png",
			confused1: "markword_confused01.png",
			confused2: "markword_confused02.png",
		}
	}
});

monogatari.script ({
	// The game starts here.
	"Start": [
		"show scene pressekonferenz with fadeIn",
		"show character sprecher normal at right with fadeIn duration 5s",
		" ",

		"show character sprecher talking1 at right",
		"sprecher  Kulturstaatsminister Weimer sagt hiermit die Leipziger Buchmesse ab.",

		"show character sprecher talking2 at right",
		"sprecher Stattdessen gibt es als Ersatzveranstaltung…",
		"show character sprecher talking4 at right",
		"sprecher die erste Bücherverbrennung seit 1933 auf deutschem Boden.",

		"show character sprecher confused2 at right",
		" ",
		"show character sprecher confused1 at right",
		" ",

		"hide character sprecher with fadeOut duration 5s",
		
	],

	});