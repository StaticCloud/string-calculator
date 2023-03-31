const math = require('mathjs')

function calculation(input) {
    const client_defined_maxlength = 20;

    // verifies if the input only contains ASCII characters
    const validASCII = input.match('^[\x00-\x7F]*$');

    // verifies if the input length is less than or equal to the length specified by the client
    const validLength = (input.length <= client_defined_maxlength);

    /* 
        verifies if the user input contains numberic characters from 0-9, 
        including negative numbers, and the characters ( ) + . *
    */ 
    
    /*
        the .match() function was throwing an error at the inclusion of the '\-'
        in our regular expression, despite the fact that it was valid in regex101

        adding a '-' at the beginning of the 0-9 part of the expression allowed for 
        negative numbers to be included in our regular expression
    */
    const validCharacters = input.match('^[-0-9\(\)\+\*\/\. ]*$');

    // check if the input contains ASCII characters and the length is less than or equal to 20
    if (!validASCII || !validLength || !validCharacters) {
        throw new Error("Invalid input")
    }

    // replace any non-numeric or mathematical strings with an empty string
    return math.evaluate(input.replace(/[^0-9\(\)\+\-\*\/\. ]/g, "")).toString();
}

module.exports = calculation;