const lyrics = 'Tumi bondhu kala pakhi Ami jeno ki. Bosonto kaale tomay Bolte parini. Sada sada kala kala';
const parts = lyrics.split(' ')
const sentences = lyrics.split('.')
const char = lyrics.split('')


console.log(parts)
// console.log(sentences)
// console.log(char)
const partial = lyrics.slice(0, 5)
const partial2 = lyrics.substring(0, 5)
console.log(partial)
console.log(partial2)

const lines = ['Tumi bondhu kala pakhi Ami jeno ki.',
    'Bosonto kaale tomay Bolte parini',
    'Sada sada kala kala'];
const newSongs = lines.join(':')
console.log(newSongs);