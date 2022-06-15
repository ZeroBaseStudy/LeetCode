var addToArrayForm = function (num, k) {
  k = String(k).split('');
  if (num[0] === 0 || num === null) return k;

  let numlen = num.length - 1, klen = k.length - 1;

  if (klen > numlen) {
    for (let i = numlen; i >= 0; i--) {
      if ((Number(k[klen]) + num[i]) > 9) {
        if (k[klen - 1] !== undefined) {
          k[klen - 1] = Number(k[klen - 1]) + 1;
          k[klen] = (Number(k[klen]) + num[i]) % 10;
          if (k[klen - 1] > 9) {
            for (let j = klen-1; j >= 0; j--) {
              if (k[j - 1] !== undefined && k[j] > 9) {
                k[j - 1] = Number(k[j - 1]) + 1;
                k[j] = Number(k[j]) % 10;
              } else if (k[j - 1] === undefined && k[j] > 9) {
                k[j] = 0;
                k = [1, ...k];
              }
            }
          }
          klen--;
        } else {
          k[klen] = 0;
          k = [1, ...k];
        }
      } else if (klen >= 0) {
        k[klen] = Number(k[klen]) + num[i];
        klen--;
      };

      
    }
    return k

  } else {
    for (let i = klen; i >= 0; i--) {
      if (num[numlen] + Number(k[i]) > 9) {
        if (num[numlen - 1] !== undefined) {
          num[numlen - 1] += 1;
          num[numlen] = (num[numlen] + Number(k[i])) % 10;
          if (num[numlen - 1] > 9) {
            for (let j = numlen-1; j >= 0; j--) {
              if (num[j - 1] !== undefined && num[j] > 9) {
                num[j - 1] += 1;
                num[j] = num[j] % 10;
              } else if (num[j - 1] === undefined && num[j] > 9) {
                num[j] = 0;
                num = [1, ...num];
              }
            }
          }
          numlen--;
        } else {
          num[numlen] = (num[numlen] + Number(k[i])) % 10;
          num = [1, ...num];
        }
      } else {
        num[numlen] += Number(k[i])
        numlen--;
      };

      
    }
  }

  return num;
};
