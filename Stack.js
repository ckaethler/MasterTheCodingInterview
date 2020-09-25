// ****************************************************************************
class Stack {
    // ------------------------------------------------------------------------
    constructor() {
        this.items = [];
    }

    // ------------------------------------------------------------------------
    push(item) {
        this.items.push(item);
        return true;
    }

    // ------------------------------------------------------------------------
    pop() {
        // if (this.items.length === 0) return false;
        return this.items.pop();
    }

    // ------------------------------------------------------------------------
    peek() {
        if (this.isEmpty()) return null;
        else return this.items[this.items.length - 1];
    }

    // ------------------------------------------------------------------------
    isEmpty() {
        return this.items.length === 0;
    }

    // ------------------------------------------------------------------------
    printStack() {
        let items_str = "";
        for (let i = 0; i < this.items.length; i++) items_str += this.items[i];
        return items_str;
    }
}

// ****************************************************************************
const new_stack = new Stack();
console.log("Is empty ", new_stack.isEmpty());
console.log("Pop ", new_stack.pop());
console.log("Push 10 ", new_stack.push(10));
console.log("Push 20 ", new_stack.push(20));
console.log("Push 20 ", new_stack.push(20));
console.log("Print Stack ", new_stack.printStack());
console.log("Peek ", new_stack.peek());
console.log("Pop ", new_stack.pop());
console.log("Print Stack ", new_stack.printStack());