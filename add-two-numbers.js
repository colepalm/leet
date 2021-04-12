/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 && l2) {
        return getNext(l1, l2, 0)
    } else if (l1) {
        getSingle(l1);
    } else if (l2) {
        getSingle(l2);
    }
};


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {number} remainder
 * @return {ListNode}
 */
function getNext(l1, l2, remainder) {
    const newRemainder = getRemainder(l1.val + l2.val + remainder)
    const newNode = new ListNode(newRemainder.val, undefined);
    if (l1.next && l2.next) {
        newNode.next = getNext(l1.next, l2.next, newRemainder.remainder)
    } else if (l1.next) {
        newNode.next = getSingle(l1.next, newRemainder.remainder);
    } else if (l2.next) {
        newNode.next = getSingle(l2.next, newRemainder.remainder);
    } else if (newRemainder.remainder) {
        newNode.next = new ListNode(newRemainder.remainder, undefined)
    }
    return newNode
}

/**
 * @param {ListNode} l1
 * @param {number} remainder
 * @return {ListNode}
 */
function getSingle(l1, remainder) {
    const newRemainder = getRemainder(l1.val + remainder)
    const newNode = new ListNode(newRemainder.val, undefined);
    if (l1.next) {
        newNode.next = getSingle(l1.next, newRemainder.remainder);
    } else if (newRemainder.remainder) {
        newNode.next = new ListNode(newRemainder.remainder, undefined)
    }
    return newNode;
}

function getRemainder(val) {
    let newRemainder = {
        val: val,
        remainder: 0
    };
    if (val > 19) {
        newRemainder.val = val - 20;
        newRemainder.remainder = 2;
    } else if (val > 9) {
        newRemainder.val = val - 10;
        newRemainder.remainder = 1;
    }
    return newRemainder
}


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {number[]} a
 * @return {ListNode}
 */
function createL(a){
    let node, temp;
    for(let i=a.length-1; i >= 0; i--){
        if(!node)
            node = new ListNode(a[i], undefined);
        else {
            temp = new ListNode(a[i], undefined);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}

/**
 * @param {ListNode} l1
 * @return {ListNode}
 */
function printList(l1) {
    console.log(l1.val, '\n')
    if (l1.next) {
        printList(l1.next)
    }
}


printList(
    addTwoNumbers(
        createL([9,9,9,9,9,9,9]),
        createL([9,9,9,9])
    )
)
