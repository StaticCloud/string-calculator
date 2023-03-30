const math = require('mathjs')

function calculation(input) {
    const client_defined_maxlength = 20;

    const validASCII = input.match('^[\x00-\x7F]*$');
    const validLength = (input.length <= client_defined_maxlength);
    const validNumbers = input.match('^[-0-9\(\)\+\*\/\. ]*$');

    // check if the input contains ASCII characters and the length is less than or equal to 20
    if (!validASCII || !validLength || !validNumbers) {
        throw new Error("Invalid input")
    }

    // replace any non-numeric or mathematical strings with an empty string
    return math.evaluate(input.replace(/[^0-9\(\)\+\-\*\/\. ]/g, "")).toString();
}

module.exports = calculation;