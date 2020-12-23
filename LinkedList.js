//it will help to create a node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
//creating a structure of a linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //method for inserting first node
    insertFirst(data) {
            this.head = new Node(data, this.head);
            this.size++;
        }
        //method for inserting last Node
    insertLast(data) {
            let node = new Node(data);
            let current;
            if (!this.head) {
                this.head = node;
            } else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }
        //method for inserting at index
    insertAt(data, index) {
            //if index is out of the range

            if (index > 0 && index > this.size) {
                return;
            }
            //if index is first
            if (index == 0) {
                this.insertFirst(data);
                return;
            }
            const node = new Node(data);
            let current, previous;
            let count = 0;
            current = this.head;
            while (count < index) {
                previous = current;
                count++;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
            this.size++;
        }
        //method for getting at index
    GetAtIndex(index) {
            let current = this.head;
            let count = 0;
            while (current) {
                if (count == index) {
                    return current.data;
                }
                count++;
                current = current.next;
            }
            return "Not Found";
        }
        //method for removing at index


    RemoveAtIndex(index) {
            if (index > 0 && index > (this.size) - 1) {
                return "index is out of the range";
            }

            if (index === 0) {
                // console.log(this.head.next);
                this.head = this.head.next;
                // return printListData();
            } else {
                let current = this.head;
                let previous;
                let count = 0;
                while (count < index) {
                    count++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                this.size--;
            }
        }
        //method for clearing the list
    clearList() {
            this.head = null;
            this.size = 0;
        }
        //method for printing the list data 
    printListData() {
        let DATA = "";
        let current = this.head;
        while (current) {
            DATA += current.data + "\n";
            current = current.next;

        }
        return DATA;
    }
}

const linkedlist = new LinkedList();
linkedlist
    .insertFirst(100);
linkedlist
    .insertFirst(200);
linkedlist
    .insertFirst(300);
linkedlist
    .insertLast(150);

console.log(linkedlist.printListData());
console.log(linkedlist.RemoveAtIndex(3));

console.log(linkedlist.printListData());