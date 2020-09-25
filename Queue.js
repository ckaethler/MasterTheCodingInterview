// ****************************************************************************
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// ****************************************************************************
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            console.log(newNode, this.head);
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return newNode.value;
    }

    dequeue() {
        if(this.isEmpty()) return null;
        const oldHead = this.head;
        const newHead = this.head.next;
        this.head = newHead;
        this.length--;
        return oldHead.value;
    }

    front() {
        if(this.isEmpty()) return null;
        return this.head.value;
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.head.value;
    }

    isEmpty() {
        return this.head === null;
    }

    printQueue() {
        let currentNode = this.head, values_arr = [];
        while(currentNode) {
            values_arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values_arr.join(' ');
    }
}

// ****************************************************************************
const thisQueue = new Queue();
console.log(`Dequeue ${thisQueue.dequeue()}`);
console.log(`IsEmpty ${thisQueue.isEmpty()}`);
console.log(`Enqueueing 1: ${thisQueue.enqueue(1)}`);
for(let i = 10; i < 70; i += 10) {
    console.log(`Enqueueing ${i}: ${thisQueue.enqueue(i)}`);
}
console.log(`Front ${thisQueue.front()}`);
console.log(`Dequeue ${thisQueue.dequeue()}`);
console.log(`Front ${thisQueue.front()}`);
console.log(`Dequeue ${thisQueue.dequeue()}`);
console.log(`Print Queue ${thisQueue.printQueue()}`);