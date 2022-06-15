var isSubPath = function(head, root) {
    if(!root) return false;
    
    return valid(head, root)  || isSubPath(head, root.left) || isSubPath(head, root.right);
    
};

function valid(lNode, tNode){
    if(!lNode) return true;
    if(!tNode) return false;
    
    if( lNode.val === tNode.val ) {
        return valid(lNode.next, tNode.left) || valid(lNode.next, tNode.right);
    }
    
    return false;
}
