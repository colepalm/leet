/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    return traversalWrapper(head, n);
};

var traversalWrapper = function(head, n) {
    if (!head.next) {
        return null;
    }

    const distance = traverse(head.next, n);

    if (distance === 1 || n > distance) {
        if (n > distance) {
            return head.next
        } else {
            head.next = null;
        }
    } else if (distance === n) {
        head.next = removeNode(head.next)
    }

    return head;
}

var traverse = function(node, n) {
    if (!node.next) {
        return 1;
    }

    const distance = traverse(node.next, n);

    if (distance === n) {
        node.next = removeNode(node.next)
        return distance+1;
    } else {
        return distance+1;
    }
}

var removeNode = function(node) {
    if (node.next) {
        return node.next;
    }
    else {
        return null;
    }
}

var removeLast = function(node) {
    if (node.next.next) {
        return node.next;
    } else {
        node.next = null;
        return node;
    }
}

const head = {"val":1,"next":{"val":2,"next":{"val":3,"next":null}}}

const newHead = removeNthFromEnd(head, 3)

console.log(newHead)


