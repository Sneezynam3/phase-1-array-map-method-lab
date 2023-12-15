const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



function titleCased(array) {
  const newArr = [];

  for (const entry of tutorials) {
    const words = entry.split(' '); // Split the entry into an array of words
    const titleCasedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1); // Title case each word
    });
    const titleCasedEntry = titleCasedWords.join(' '); // Join the title cased words back into a string
    newArr.push(titleCasedEntry); // Push the title cased entry into the new array
  }
  
  return newArr;
}
console.log(titleCased());
// titleCased(tutorials)