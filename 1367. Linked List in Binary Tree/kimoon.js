var isSubPath = function(head, root) {
  let queue = [root];

  while(queue.length){
    let node = queue.shift();

    if(node.val === head.val && isSame(node, head)){
      return true;
    }

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
    return false;
};

  
function isSame(treeNode, listNode){
    if(!listNode) return true;
    if(!treeNode || treeNode.val !== listNode.val) return false;
    return isSame(treeNode.left, listNode.next) || isSame(treeNode.right, listNode.next)
};
