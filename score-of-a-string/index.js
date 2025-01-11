var scoreOfString = function (s) {
  let score = 0;

  if (s.length === 2) {
    return Math.abs(s.charCodeAt(0) - s.charCodeAt(1));
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] && s[i + 1]) {
      score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
  }

  return score;
};
