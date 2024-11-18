import { ListNode, Node } from "./node";

interface ILinkedList<T> {
	insertInBegin(data: T): Node<T>;
	insertAtEnd(data: T): Node<T>;
	deleteNode(node: Node<T>): void;
	traverse(): T[];
	size(): number;
	search(comparator: (data: T) => boolean): Node<T> | null;
}

class DoubleLinkedList<T> implements ILinkedList<T> {
	private head: Node<T> | null = null;
	
	public insertInBegin(data: T): Node<T> {
		const node = new Node(data);
		if (!this.head) 
			this.head = node;
		 else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
		return node;
	}
	
	public insertAtEnd(data: T): Node<T> {
		const node = new Node(data);
		if (!this.head) 
			this.head = node;
		 else {
			const getLast = (node: Node<T>): Node<T> => {
				return node.next ? getLast(node.next) : node;
			};
			
			const lastNode = getLast(this.head);
			node.prev = lastNode;
			lastNode.next = node;
		}
		return node;
	}
	
	public deleteNode(node: Node<T>): void {
		if (!node.prev) 
			this.head = node.next;
		 else {
			const prevNode = node.prev;
			prevNode.next = node.next;
		}
	}
	
	public traverse(): T[] {
		const array: T[] = [];
		if (!this.head) 
			return array;
		
		
		const addToArray = (node: Node<T>): T[] => {
			array.push(node.data);
			return node.next ? addToArray(node.next) : array;
		};
		return addToArray(this.head);
	}
	
	public size(): number {
		return this.traverse().length;
	}
	
	public search(comparator: (data: T) => boolean): Node<T> | null {
		const checkNext = (node: Node<T>): Node<T> | null => {
			if (comparator(node.data)) 
				return node;
			
			return node.next ? checkNext(node.next) : null;
		};
		
		return this.head ? checkNext(this.head) : null;
	}
}

class LinkedList {
	head: ListNode | null;
	size: number;
	
	constructor() {
		this.head = null;
		this.size = 0;
	}
	
	push(value: number): boolean {
		const newNode = new ListNode(value);
		if (!this.head) 
			this.head = newNode;
		
		let current = this.head;
		while (current.next) 
			current = current.next;
		
		current.next = newNode;
		this.size++;
		return true;
	}
	
	pop() {
		// already empty list
		if(!this.head) 
			return false;
		
		
		// only head present, can be set to null directly
		if(this.size === 1) {
			this.head = null;
			this.size--;
			return true;
		}
		
		// we will traverse to the end of the list
		// then remove the link between the second last and the last node
		let current = this.head;
		let prevNode = null;
		
		while(current.next) {
			prevNode = current;
			current = current.next;
		}
		
		// @ts-expect-error - TS18047: prevNode is possibly null
		prevNode.next = null;
		
		// decrease size after removing node
		this.size--;
		return true;
	}
}

// const doubleLinkedList = new DoubleLinkedList<number>();
// doubleLinkedList.insertInBegin(1);
// doubleLinkedList.insertInBegin(2);
// doubleLinkedList.insertInBegin(3);
// doubleLinkedList.insertInBegin(4);
// doubleLinkedList.insertInBegin(5);
// console.log(doubleLinkedList);
// console.log(doubleLinkedList.size());

const simpleLinkedList = new LinkedList();
console.log(simpleLinkedList.pop());

console.log(simpleLinkedList.push(10));
console.log(simpleLinkedList.push(20));
console.log(simpleLinkedList.push(30));

console.log(simpleLinkedList.pop());

console.log(simpleLinkedList);