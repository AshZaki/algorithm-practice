// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const strLibrary = {};
   
    // for (let i = 0; i < str.length; i++){
    //     if (!strLibrary[str[i]]){
    //         strLibrary[str[i]] = 1
    //     }
    //     else{
    //         strLibrary[str[i]]++
    //     }
    // }

    for (let char of str){
        if (!strLibrary[char]){
            strLibrary[char] = 1;
        }
        else{
            strLibrary[char]++;
        }
    }
   
    let maxChar = 0;
    let character;
    for (let key in strLibrary){
        if (strLibrary[key] > maxChar){
            maxChar = strLibrary[key]
            character = key
        }
    }
    return character;
}

module.exports = maxChar;
