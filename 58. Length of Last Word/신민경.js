var lengthOfLastWord = function(s) {
    s = s.split(' ')
    
    for (let i = 0; i < s.length; i++) {
        if (!s[i].length) {
            s.splice(i, 1)
            i--
        }
    }
    return s[s.length - 1].length
};
