/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let newHead = head;
    if (head.next) {
        newHead = head.next;
        process(head)
        return newHead;
    }
    return newHead;
};

var process = function(node) {
    if(node.next) {
        const third = node.next.next;
        let fourth = null;
        if (third) {
            fourth = node.next.next.next;
        }
        node.next.next = node;

        if(fourth) {
            node.next = fourth;
            process(third)
        } else {
            node.next = third;
        }
    }
};

const list = {"val":1,"next":{"val": 2, next: {"val":3,"next":{"val":4,"next":null}}}}
const list2 = {};
const list3 = {"val": 1}
const newlist = swapPairs(list)
const newlist2 = swapPairs(list2)
const newlist3 = swapPairs(list3)
console.log(newlist)
console.log(newlist2)
console.log(newlist3)
