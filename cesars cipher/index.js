
function cesarCipher(str, idx){
    let result = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(letter of str){
        let index = alphabet.indexOf(letter);
        letter = letter.toLowerCase();
        if(index !== -1){
            let newIndex = (index + idx) % alphabet.length;
            let newLetter = alphabet[newIndex];
            result += newLetter;
            console.log("new letter", newLetter);
        }

    }
    return result;
}


console.log(cesarCipher('abc:', 4));