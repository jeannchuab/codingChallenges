//LinkedList
//To see a visual Linked list go to: https://visualgo.net/en/list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1
    }
    append(value) {                
        const newNode = new Node(value)
        newNode.prev = this.tail; 
        this.tail.next = newNode;
        this.tail = newNode;        
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }
    insert(index, value) {
        
        //check params
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        
        if (index >= this.length) {
            return this.append(value);
        }
        
        const newNode = new Node(value);
        
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;        
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this);
        return this.printList();
    }
    traverseToIndex(index) {
        //check for params
        let count = 0;
        let currentNode = this.head;
        while (count !== index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    remove(index){
        //check parameters
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    reverse(){
        if (!this.head.next) {
            return this.head;
        } 
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const temp = second.next
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(32);
myLinkedList.append(100);
// myLinkedList.prepend(1)
myLinkedList.printList();
// myLinkedList.insert(1, 99);
// myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.remove(2);
// console.log(myLinkedList);
myLinkedList.reverse();
// console.log(myLinkedList);
// myLinkedList.printList();