/*** First homework assignment for the course ***/

/*I'm doing my first 
Homework. This is all about 
DATA TYPES */

var artist = "Darkthrone"; //A good Norwegian black metal band
var songName = "The hardship of the scots"; //This is an awesome song!
var album = "Old Star"; //All of the songs are quite good.
var genre = "Black metal";  //I like this genre very much.
var yearReleased = 2019;
var songDurationSec = 441;
var sizeInDisk = "8 MB";
var recordHouse = "Peaceville Records Ltd";
var favoriteSong = true;
var songLyrics = ["You","get","nothing","for", "nothing"]; //This is just a little sample =)
var bandLineup = {
    Drums : "Fenriz",
    Guitar : "Nocturno Culto",
    Vocals : "Nocturno Culto",
    Bass : "Nocturno Culto",
    FormerMembers : {
        Guitar_ : "Anders Risberget",
        Bass_ : "Zephyrous",
    }
};
var streamPlatf = ["Spotify", "Deezer","Youtube", "Apple Music", "LiveXLive", "amazon music"];
var NominationAward = false;


/* Now I will print all the data in the screen... */
console.log(artist);
console.log(songName);
console.log(album);
console.log(genre);
console.log(yearReleased);
console.log(songDurationSec);
console.log(sizeInDisk);
console.log(recordHouse);
console.log(favoriteSong);
console.log(songLyrics);
console.log(bandLineup);
console.log(bandLineup.Guitar);
console.log(bandLineup.FormerMembers.Bass_); //A nested object
console.log(streamPlatf[0]);
console.log(streamPlatf.slice(3));
console.log(NominationAward);