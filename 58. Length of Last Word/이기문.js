var lengthOfLastWord = function(s) {
  let len = 0;
  s.split(' ').forEach(item => {
      if(item !== ''){
         len = item.length;
      } 
  })
  return len;
};
