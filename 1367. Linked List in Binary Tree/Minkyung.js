var isSubPath = function(head, root) {
    const dfs = (head, node) => {
        if (!head) return true
        if (!node) return false
        
        if (node.val != head.val) return false

        head = head.next

        return  (dfs(head, node.left) || dfs(head, node.right))
    }
    
    const isValidPath = (head, root) => {
        if (!root) return false
        
       return dfs(head, root) || isValidPath(head, root.left) || isValidPath(head, root.right)
    }
    
    return isValidPath(head, root)
};
