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
    let arr = [];
    let codeChar = [];
    let decoded = [];
    let morse = [];
    let len = expr.length / 10;
    let start = 0, end = 0;

    for (let i = 0; i <= len; i++) {
        arr.push(expr.slice(start, end));
        start = end;
        end += 10;
    }
    arr.shift();

    for (let i = 0; i < len; i++) {
        codeChar = arr[i].split('');

        for (let j = 0; j < 10; j += 2) {
            if (codeChar[j] == '1' && codeChar[j + 1] == '0') {
                morse.push('.');
            } else if (codeChar[j] == '1' && codeChar[j + 1] == '1') {
                morse.push('-');
            } else if (codeChar[j] == '*') {
                morse.push(' ');
                break;
            }
        }

        if (morse[0] == ' ') {
            decoded.push(' ');
        } else {
            decoded.push(MORSE_TABLE[morse.join('')]);
        }

        morse = [];
    }

    return decoded.join('');
}

module.exports = {
    decode
}