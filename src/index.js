const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let string = "";
    let arr = [];
    const strSplit = expr.split("**********");

   for (let i in strSplit) {
       string = strSplit[i];

       while (true) {
           if (string.length >= 10) {
               arr.push(string.slice(0, 10));
               string = string.slice(10);
           } else {
               arr.push(string);
               break;
           }
       }

       for (let j in arr) {
           arr[j] = arr[j].replace(/(10)/gm, ".");
           arr[j] = arr[j].replace(/(11)/gm, "-");
           arr[j] = arr[j].replace(/\d+/gm, "");
           arr[j] = MORSE_TABLE[arr[j]];
       }

       strSplit[i] = arr.join("");
       arr = [];
   }
   return strSplit.join(" ")
}

module.exports = {
    decode
}