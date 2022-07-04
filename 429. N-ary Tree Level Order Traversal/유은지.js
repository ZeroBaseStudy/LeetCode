var levelOrder = function (root, answer = [], level = 0) {
  if (!root) return [];

  answer[level] ? null : (answer[level] = []);
  answer[level].push(root.val);

  for (let ch of root.children) {
    levelOrder(ch, answer, level + 1);
  }

  return answer;
};
