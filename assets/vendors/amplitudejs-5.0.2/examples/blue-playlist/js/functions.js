/*
	When the wiki link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let wikiLinks = document.getElementsByClassName('wiki-link');
for (var i = 0; i < wikiLinks.length; i++) {
	wikiLinks[i].addEventListener('click', function(e) {
		e.stopPropagation();
	});
}
let songElements = document.getElementsByClassName('song');
for (var i = 0; i < songElements.length; i++) {
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function() {
		this.style.backgroundColor = '#F9AC3D';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#653419';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#cf4917';
		if (!this.classList.contains('amplitude-active-song-container')) {
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}
		this.querySelectorAll('img.wiki-brown')[0].style.display = 'none';
		this.querySelectorAll('img.wiki-orange')[0].style.display = 'block';
		this.querySelectorAll('.song-duration')[0].style.color = '#653419';
	});
	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function() {
		this.style.backgroundColor = 'rgba(207,73,23,0)';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#e8c674';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#653419';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('img.wiki-brown')[0].style.display = 'block';
		this.querySelectorAll('img.wiki-orange')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#e8c674';
	});
	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function() {
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}
/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	"songs": [{
		"name": "Theme from The Monkees",
		"album": "The Monkees",
		"url": "assets/audio/theme-from-the-monkees.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-the-monkees.jpg"
	}, {
		"name": "Daydream Believer",
		"album": "More of The Monkees",
		"url": "assets/audio/daydream-believer.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-more-of-the-monkees.jpg"
	}, {
		"name": "I'm A Believer",
		"album": "The Birds, The Bees & The Monkees",
		"url": "assets/audio/im-a-believer.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-the-birds-the-bees-and-the-monkees.jpg"
	}, {
		"name": "Last Train To Clarksville",
		"album": "The Monkees",
		"url": "assets/audio/last-train-to-clarksville.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-the-monkees.jpg"
	}, {
		"name": "Pleasant Valley Sunday",
		"album": "Pisces, Aquarius, Capricorn & Jones Ltd",
		"url": "assets/audio/pleasant-valley-sunday.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-pisces-aquarius-capricorn-and-jones-ltd.jpg"
	}, {
		"name": "Valleri",
		"album": "The Birds, The Bees & The Monkees",
		"url": "assets/audio/valleri.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-the-birds-the-bees-and-the-monkees.jpg"
	}, {
		"name": " A Little Bit Me, A Little Bit You",
		"album": "Headquarters",
		"url": "assets/audio/a-little-bit-me-a-little-bit-you.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-headquarters.jpg"
	}, {
		"name": "(I'm Not Your) Steppin' Stone",
		"album": "More of The Monkees",
		"url": "assets/audio/im-not-your-steppin-stone.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-more-of-the-monkees.jpg"
	}, {
		"name": "For Pete's Sake (Closing Theme)",
		"album": "Headquarters",
		"url": "assets/audio/for-petes-sake-closing-theme.ogg",
		"cover_art_url": "assets/img/album-art/album-1425x1425-headquarters.jpg"
	}]
});