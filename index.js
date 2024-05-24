class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    //Adds a new node containing a value to the end of the list
    append(value) {
        const newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.length++;
    }

    //Adds a new node containing a value to the start of the list
    prepend(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            this.head = newNode;
            this.head.next = current;

        }

        this.length++;
    }

    //Return number of nodes in list
    size() {
        return this.length;
    }

    //Return first node in list
    getHead() {
        if (!this.head) {
            return "List is empty";
        }
        return this.head;
    }

    //Return last node in list
    getTail() {
        if (!this.head) {
            return "List is empty";
        }
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        return current;
    }

    //Print my LinkedList objects as strings
    toString() {
        if (this.head === null) {
            return "List is empty";
        }

        let result = "";
        let current = this.head;

        while (current !== null) {
            result += `(${current.value}) -> `;
            current = current.next; 
        }

        return result += "null";
    }
}

let myLinkedList = new LinkedList();
myLinkedList.append(100);
myLinkedList.append(200);
myLinkedList.append(300);
myLinkedList.prepend(400);
console.log(myLinkedList.size());
console.log(myLinkedList.getHead());
console.log(myLinkedList.getTail());
console.log(myLinkedList.toString());