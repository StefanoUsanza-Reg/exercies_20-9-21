//? anagramma 10 minuti
let a = "Ciao"
let b = "oAic"
let c = a.toLocaleLowerCase()
let d = b.toLocaleLowerCase()
//riordina stringa
function sortAlphabet(text) {
    return text.split('').sort().join('');
  }
//compare
  if(sortAlphabet(c).localeCompare(sortAlphabet(d))==0)
    console.log("true")
else 
  console.log("false")