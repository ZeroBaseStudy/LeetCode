var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

/*
trim() : 문자열 양 끝의 공백을 제거
split(" ") : space를 기준으로 split
마지막 요소를 pop해서 length return
*/
