import { ListNode } from "@/ds-and-algorithms/linked-list/node";

const head = [1, 2, 3, 4, 5, 6];

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
	let slowPointer = head;
	let fastPointer = head;
	
	console.log(slowPointer?.next, fastPointer?.next?.next);
	
	while (fastPointer !== null && fastPointer.next !== null) {
		// @ts-expect-error - TS18047: slowPointer is possibly null.
		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next.next;
	}
	
	return slowPointer;
}

// @ts-expect-error - TS2345: Argument of type number[] is not assignable to parameter of type ListNode.
console.log(middleNode(head));