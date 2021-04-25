function translatePigLatin(str) {
    let newWord = '';
    
    if ((/^[aeiou]$/i).test(str[0])) {
        str += 'way'
    } else {
        for (let i = 0; i < str.length; i++) {
            if (!(/^[aeiou]$/i).test(str[i])){
                newWord += str[i]
            } else {
                str = str.split('').slice(newWord.length).join("")+ newWord + 'ay'
                break
            }
        }
    }
    return str
}

console.log(translatePigLatin("consonant"));