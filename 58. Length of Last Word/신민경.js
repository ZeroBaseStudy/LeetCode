var lengthOfLastWord = function(s) {
    s = s.split(' ')
    
    while (!s[s.length - 1].length) {
        s.pop()
    }
    return s[s.length - 1].length
};
