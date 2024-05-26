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

    //Returns node at given index
    at(index) {
        if (index > this.length - 1 || index < 0) {
            return "Index out of range";
        } else {
            let count = 0;
            let current = this.head;

            for (let i = 0; i < this.length; i++) {
                if (count === index) {
                    return current.value;
                } else {
                    current = current.next;
                    count++;
                }
            }
        }
    }

    //Removes last element from list
    pop() {
        if (this.length === 0) {
            return "List is empty";
        }

        if (this.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            let previous = null;

            while (current.next !== null) {
                previous = current;
                current = current.next;
            }

            previous.next = null;
        }

        this.length--;
    }

    //Returns true if the passed value is in the list, otherwise return false
    contains(value) {
        if (this.length === 0) {
            return false;
        } 

        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true;
            } else {
                current = current.next;
            }
        }

        return false;
    }

    //Return index of node containing the value, or null if absent
    find(value) {
        if (this.head === null) {
            return null;
        }

        let current = this.head;
        let index = -1;

        while (current !== null) {
            index++;
            if (current.value === value) {
                return index;
            } else {
                current = current.next;
            }
        }

        return null;
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

    //Inert new node with provided vallue at given index
    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            return "Index out of range";
        } 

        const newNode = new Node(value);

        let currentIndex = 0;
        let current = this.head;
        
        if (index === 0) {
            let next = this.head;
            this.head = newNode;
            this.head.next = next;
        } else {
            while (currentIndex < index - 1) {
                current = current.next;
                currentIndex++;
            }
        
            let next = current.next;
            current.next = newNode;
            current.next.next = next;
        }

        this.length++;
    }

    //Remove a node at given index
    removeAt(index) {
        if (this.length === 0 || index < 0 || index > this.length - 1) {
            return "Index out of range"
        }

        let current = this.head;

        if (index === 0) {
            this.head = current.next;
        } else {

            let previous = null;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }
    
            previous.next = current.next;
        }
        this.length--;
    }
}

let myLinkedList = new LinkedList();
myLinkedList.append(100);
myLinkedList.append(200);
myLinkedList.append(300);
myLinkedList.prepend(400);
console.log("size", myLinkedList.size());
console.log("head", myLinkedList.getHead());
console.log("tail", myLinkedList.getTail());
console.log(myLinkedList.toString());
console.log("index", myLinkedList.at(2));
console.log("pop");
myLinkedList.pop();
console.log(myLinkedList.toString());
console.log(myLinkedList.contains(200));
console.log(myLinkedList.find(300));
myLinkedList.insertAt(500, 0);
console.log(myLinkedList.toString());
console.log(myLinkedList.insertAt(600, 4));
console.log(myLinkedList.toString());
console.log(myLinkedList.insertAt(700, 6));
console.log(myLinkedList.toString());
console.log(myLinkedList.removeAt(0));
console.log(myLinkedList.toString());
console.log(myLinkedList.removeAt(2));
console.log(myLinkedList.toString());
console.log(myLinkedList.removeAt(2));
console.log(myLinkedList.toString());


