/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

var addTwoNumbers = function(l1, l2) {

    let num1 = "";
    let num2 = "";

    while(l1){
        num1 = l1.val + num1;
        l1 = l1.next;
    }

    while(l2){
        num2 = l2.val + num2;
        l2 = l2.next;
    }

    let result = BigInt(num1) + BigInt(num2);
    let resultString = result.toString();


    let resultList = new ListNode(0);

    let current = resultList;

    for(let i = resultString.length - 1; i >= 0; i-- ){
        current.next = new ListNode(parseInt(resultString[i]));
        current = current.next;
    }

    return resultList.next;
};


function createList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let value of arr) {
        curr.next = new ListNode(value);
        curr = curr.next;
    }
    return dummy.next;
}

function printList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result);
}

let l1 = createList([2, 4, 3]);
let l2 = createList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
printList(result); // Output: [7, 0, 8]