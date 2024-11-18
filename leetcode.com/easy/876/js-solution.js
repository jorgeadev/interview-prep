const head = [1, 2, 3, 4, 5, 6];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param { ListNode } head
 * @return { ListNode }
 */
const middleNode = function (head) {
	let slowPointer = head;
	let fastPointer = head;
	
	while (fastPointer !== null && fastPointer.next !== null) {
		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next.next;
	}
	
	return slowPointer;
};

// function ListNode(val, next) {
// 	this.val = (val === undefined ? 0 : val)
// 	this.next = (next === undefined ? null : next)
// }


console.log(middleNode(head));