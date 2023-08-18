"use strict"
// Set up Node class
class Node {
    constructor(value, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }
}
// Class for List, and methods to work the list
class LinkedList {
    constructor() {
        this.head = null
        this.listSize = 0
    }
    // adds a new node containing value to the end of the list
        append (value) {
            let newNode = new Node(value);
            this.listSize++
            let current;

            if(!this.head)  {
                this.head = newNode;
            }  else { current = this.head
                while(current.nextNode) {
                    current = current.nextNode;
                }
                current.nextNode = newNode
                }
        }
        // adds a new node containing value to the start of the list
        prepend (value)  {
            this.head = new Node(value, this.head)
            this.listSize++
        }
        // returns the total number of nodes in the list
        size ()  {
            console.log(this.listSize)
        }
        // returns the first node in the list
        getHead ()  {
            console.log(this.head.value)
        }
        // returns the last node in the list
        getTail ()  {
            let current = this.head;
            while(current.nextNode){
                current = current.nextNode;
                if(!current.nextNode){
                    console.log(current.value)
                }
            }
        }
        // returns the node at the given index
        at (index)  {
            let current = this.head;
            let count = 0;
            if(index > this.listSize-1){
               return console.error(`Error: No item at index ${index}`)
            }
            while(current) {
                if(count == index){
                    console.log(current.value)
                }
                count++;
                current = current.nextNode;
            }
        }
        // removes the last element from the list
        pop ()  {
            let current = this.head;

            while(current.nextNode.nextNode){
                current = current.nextNode;
            }
            current.nextNode = null;
            this.listSize--
        }
        // returns true if the passed in value is in the list

        contains(value)  {
            let current = this.head;
            while(current.nextNode){
                if (current.value == value) {
                return console.log(true)
            }
                current = current.nextNode;
                if(current.value == value){
                    return console.log(true, value)
                }
            }
        }
        // returns the index of the node containing value, or null if not found.
        find(value)  {
            let current = this.head;
            let count = 0;
            while(current.nextNode) {
                if(value ==current.value){
                    return console.log(count)
                }
                current = current.nextNode;
                count++
            }
        }
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
        toString ()  {
            let current = this.head;
            let count = 0
            while(current) {
                console.log(`${count}: ${current.value}`);
                current = current.nextNode
                count++
            }
        }


}
const ll = new LinkedList()
//ll.<run fn here>
ll.append(25);
ll.append(87);
ll.append(32);
ll.append(66);
ll.toString()
ll.contains(25)
ll.contains(87)
ll.contains(32)
ll.contains(66)


