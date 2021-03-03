class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    insertBefore(newItem, nodeItem) {
        if (!this.head) {
            console.log('No nodes in list.')
            return;
        }

        let prevNode = this.head
        let currNode = this.head

        while((currNode.value !== nodeItem) && (currNode !== null)) {
            prevNode = currNode
            currNode = currNode.next
        }

        if (currNode === null) {
            console.log('Node not found')
            return;
        }

        prevNode.next = new _Node(newItem, currNode)
    }

    insertAfter(newItem, nodeItem) {
        if (!this.head) {
            console.log('No nodes in list.')
            return;
        }

        let currNode = this.head

        while((currNode.value !== nodeItem) && (currNode !== null)) {
            currNode = currNode.next
        }

        if (currNode === null) {
            console.log('Node not found')
            return;
        }

        currNode.next = new _Node(newItem, currNode.next)
    }

    insertAt(item, pos) {
        if (!this.head) {
            console.log('No nodes in list.')
            return;
        }

        if (pos === 0) {
            this.insertFirst(item)
            return;
        }

        let counter = 1
        let currNode = this.head

        while(counter !== pos && currNode !== null) {
            currNode = currNode.next
            counter++
        }

        currNode.next = new _Node(item, currNode.next)
    }

    find(item) {
        let currNode = this.head

        if (!this.head) {
            return null
        }

        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }

        return currNode
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next
            return;
        }

        let currNode = this.head
        let prevNode = this.head

        while ((currNode.value !== item) && (currNode !== null)) {
            prevNode = currNode
            currNode = currNode.next
        }

        if (currNode === null) {
            console.log('Item not found')
            return;
        }
        prevNode.next = currNode.next
    }

    
}

module.exports = LinkedList;