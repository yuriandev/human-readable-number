module.exports = function toReadable(number) {
    const singleNum = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teenNum = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozensNum = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number >= 0 && number < 10) {
        return singleNum[number];
    }
    if (number > 10 && number < 20) {
        return teenNum[number - 11];
    }
    if (number % 10 == 0 && number < 100) {
        return dozensNum[number / 10 - 1];
    }
    if (number > 20 && number < 100) {
        return `${dozensNum[Math.floor(number / 10) - 1]} ${
            singleNum[number % 10]
        }`;
    }
    if (number >= 100 && number % 100 == 0 && number < 1000) {
        return `${singleNum[number / 100]} hundred`;
    }
    if (number >= 101 && number % 100 != 0 && number < 1000) {
        return `${singleNum[Math.floor(number / 100)]} hundred ${toReadable(
            number % 100
        )}`;
    }
};
