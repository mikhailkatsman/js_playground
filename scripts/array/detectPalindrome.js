var longestPalindrome = function(s) {
    const occurrences = s.split('').reduce((acc, char) => {
        return acc[char] ? ++acc[char] : acc[char] = 1, acc;
    }, {});

    console.log(occurrences);
};

longestPalindrome("abccccdd");