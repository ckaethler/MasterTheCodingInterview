// ****************************************************************************
class Node {
    constructor (value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    // ------------------------------------------------------------------------
    constructor() {
        this.root = null;
    }

    // ------------------------------------------------------------------------
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } 
        let currentNode = this.root;
        while(currentNode) {
            if (newNode.value < currentNode.value) {
                // Left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                else currentNode = currentNode.left;
            }
            else if (newNode.value >= currentNode.value) {
                // Right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                else currentNode = currentNode.right;
            }
        }
    }

    // ------------------------------------------------------------------------
    lookup(value) {
        if(!this.root) return undefined;

        let currentNode = this.root;
        while(currentNode) {
            if (value === currentNode.value) return currentNode;
            else if (value >currentNode.value) currentNode = currentNode.right;
            else if (value < currentNode.value) currentNode = currentNode.left;
        }
        return false;
    }

    // ------------------------------------------------------------------------
    remove(value) {
        if (!this.root) return undefined;
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            // moves searching node to the left
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } 
            // moves searching to the right
            else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } 
            // deals with finding node to delete
            else if (currentNode.value === value) {
                // Scenario 1: node to delete has no children
                if (!currentNode.left && !currentNode.right) {
                    if (parentNode.left === currentNode) parentNode.left = null;
                    else if (parentNode.right === currentNode) {
                        parentNode.right=null;
                    }
                    return currentNode;
                }
                // Scenario 2: Node to delete has one child (left)
                else if (currentNode.left && !currentNode.right) {
                    parentNode.left = currentNode.left;
                    return currentNode;
                }
                // Scenario 3: Node to delete has one child (right)
                else if (!currentNode.left && currentNode.right) {
                    parentNode.right = currentNode.right;
                    return currentNode;
                }
                // Scenario 4: Node to delete has two children
                else if (currentNode.left && currentNode.right) {
                    
                }
            }
            // error handling if the node to delete doesn't exist
            else if (!currentNode.left && !currentNode.right) {
                return undefined;
            } 
        }
    }
}

const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    console.log(node.value);
    traverse(node.right);
}

// ****************************************************************************
const newTree = new BinarySearchTree();
newTree.insert(9);
newTree.insert(4);
newTree.insert(20);
newTree.insert(1);
newTree.insert(6);
newTree.insert(15);
newTree.insert(170);
newTree.insert(171);
traverse(newTree.root);
// console.log(newTree.lookup(15));
// console.log(newTree.lookup(20));
// console.log(newTree.lookup(21));
// newTree.remove(15);
console.log(newTree.remove(171));
traverse(newTree.root);
