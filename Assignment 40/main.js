// Define the function to create an album object
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    // Add tracks to the album if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create and print three albums using the function
var album1 = make_album("Taylor Swift", "Folklore");
console.log("Album 1:", album1);
var album2 = make_album("Coldplay", "A Head Full of Dreams", 11);
console.log("Album 2:", album2);
var album3 = make_album("The Weeknd", "After Hours");
console.log("Album 3:", album3);
// Example with a specified number of tracks
var album4 = make_album("Adele", "25", 11);
console.log("Album 4:", album4);
