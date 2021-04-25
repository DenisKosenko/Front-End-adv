/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let letter = coordinates.charCodeAt(0),
        num = +coordinates[1]
    
    if((letter % 2 == 0 && num % 2 == 0) || (letter % 2 != 0 && num % 2 != 0)){
        return false
    }
    else{
        return true
    }
};

console.log(squareIsWhite("h3"))