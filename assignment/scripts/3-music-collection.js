console.log('***** Music Collection *****')

let collection = [];
console.log(collection);

// Adding music CD to collection
function addToCollection(albumTitle, albumArtist, yearPublished) {
// the variable album contains the following
  let album = {
    title:  albumTitle,
    artist: albumArtist,
    year: yearPublished,
  };
// adding the album to variable collection
  collection.push(album);
  return album;
}

// testing the function
console.log(addToCollection('Que Huong Toi', 'Manh Quynh', '1996'));
console.log(collection);
