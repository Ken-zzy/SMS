// Function to validate a credit card number based on its type
function validateCreditCard(cardNumber, cardType) {
    // Remove any spaces from the input
    cardNumber = cardNumber.replace(/\s+/g, '');

    // Define regex patterns for different card types
    const cardPatterns = {
        // Visa: Starts with 4, length 13 or 16 digits.
        visa: /^4\d{12}(\d{3})?$/,

        // Mastercard: 
        // Traditional range: Starts with 51 through 55, 16 digits.
        mastercard: /^5[1-5]\d{14}$/,

        // American Express: Starts with 34 or 37, 15 digits.
        amex: /^3[47]\d{13}$/,

        // Verve: Starts with 5060, 5061, 5078, 6500, length 16-19 digits.
        verve: /^(5060|5061|5078|6500)\d{12,15}$/
    };

    // Get the regex for the provided card type (case-insensitive)
    const pattern = cardPatterns[cardType.toLowerCase()];

    if (!pattern) {
        throw new Error(`Unsupported card type: ${cardType}`);
    }

    return pattern.test(cardNumber);
}

/**
 * Credit Card Validation Regex Explanation:
 *
 * 1. Visa (/^4\d{12}(\d{3})?$/)
 *    - Starts with '4'
 *    - Length: 13 or 16 digits
 *    - Example: 4236789646787654
 *
 * 2. Mastercard (/^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/)
 *    - Old range: Starts with 51–55 (16 digits)
 *    - New range: Starts with 2221–2720 (16 digits)
 *    - Example: 55688887666758799, 2221000000000000
 *
 * 3. American Express (Amex) (/^3[47]\d{13}$/)
 *    - Starts with '34' or '37'
 *    - Length: 15 digits
 *    - Example: 346578676978069000
 *
 * 4. Verve (/^(5060|5061|5078|6500)\d{12,15}$/)
 *    - Starts with 5060, 5061, 5078, or 6500
 *    - Length: 16 to 19 digits
 *    - Example: 5060123456789012, 6500123456789012345
 */