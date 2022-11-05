/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) {
        return null;
    }
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    let listNode;
    if (list1.val >= list2.val) {
        listNode = list2;
        listNode.next = merge(list1, list2.next)
    } else {
        listNode = list1;
        listNode.next = merge(list1.next, list2)
    }
    return listNode;
};

var merge = function(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    if (list1.val >= list2.val) {
        list2.next = merge(list1, list2.next);
        return list2;
    } else {
        list1.next = merge(list1.next, list2);
        return list1;
    }
}

const list1 = {"val":1,"next":{"val":2,"next":{"val":4,"next":null}}}
const list2 = {"val":1,"next":{"val":3,"next":{"val":4,"next":null}}}
const newHead = mergeTwoLists(list1, list2);
console.log(newHead)

