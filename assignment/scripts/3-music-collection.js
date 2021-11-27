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
  }
// adding the album to variable collection
  collection.push(album);
  return album;
}

console.log('TESTING THE FUNCTION');
// testing the function to see if it works
console.log(addToCollection('Quê Hương Tôi', 'Manh Quynh', '1996'));
console.log(addToCollection('Mẹ Tôi', 'Manh Quynh', '1996'));
console.log(addToCollection('Anh Ba Khía', 'Phi Nhung', '1998'));
console.log(addToCollection('Who Let the Dogs Out', 'Baha Men', '2000'));
console.log(addToCollection('Because I Got High', 'Afroman', '2000'));
console.log(addToCollection('What is Love', 'Clean Bandit', '2018'));
console.log(collection);

console.log('SHOWING THE ALBUM COLLECTION');
// creating the function to show the collection
function showCollection(array) {
// Here you are looping through the array which is the collection
  for (let i = 0; i < array.length; i++) {
//console.log the information
    console.log(
      `Album Title: ${array[i].title} by ${array[i].artist}, published in ${array[i].year}.`
    );
  }
}

// Testing the showCollection unction
showCollection(collection);

// create a function to find artist in Collection
function findByArtist(artist) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
        if(collection[i].artist === artist) {
            result.push(collection[i]);
      }
    }
        return {result};
}

console.log('FIND BY ARTIST');

// testing the function of findByArtist
console.log(findByArtist('Manh Quynh'));
console.log(findByArtist('Afroman'));
