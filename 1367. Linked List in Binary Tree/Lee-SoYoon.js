/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    if (!head || !root) {
        return false;
    }

    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.pop();
        
        if (compare(head, node)) {
            return true;
        }
        
        if (node.left) {
            queue.push(node.left);
        }
        
        if (node.right) {
            queue.push(node.right);
        }
    }
    
    return false;
};

function compare(item, node) {
    if (!item) {
        return true;
    }
    
    if (!node) {
        return false;
    }

    if (item.val !== node.val) {
        return false;
    }

    return compare(item.next, node.left) || compare(item.next, node.right);
}
