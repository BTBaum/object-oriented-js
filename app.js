var playlist = new Playlist();

var fiftyWaysToLeaveYourLover = new Song("50 Ways to Leave Your Lover", "Paul Simon", "3:38");
var beastOfBurden = new Song("Beast of Burden", "The Rolling Stones", "4:25");
var gdtrfb = new Song("Going Down the Road Feelin' Bad", "Grateful Dead", "7:32");
var sailingShoes = new Song("Sailing Shoes", "Robert Palmer", "2:42");
var crosseyedAndPainless = new Song("Crosseyed and Painless", "Talking Heads", "4:47");
var lifeOnMars = new Song("Life On Mars?", "David Bowie", "3:55");

playlist.add(fiftyWaysToLeaveYourLover);
playlist.add(beastOfBurden);
playlist.add(gdtrfb);
playlist.add(sailingShoes);
playlist.add(crosseyedAndPainless);
playlist.add(lifeOnMars);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);

}
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);

}
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
