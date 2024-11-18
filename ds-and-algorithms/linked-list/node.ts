export class Node<T> {
	public next: Node<T> | null = null;
	public prev: Node<T> | null = null;
	constructor(public data: T) {}
}

export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val);
		this.next = (next===undefined ? null : next);
	}
}