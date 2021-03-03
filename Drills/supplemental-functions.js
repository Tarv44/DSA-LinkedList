function display(LL) {
    let currNode = LL.head
    while (currNode !== null) {
        console.log(currNode.value)
        currNode = currNode.next
    }
}

function size(LL) {
    let currNode = LL.head
    let size = 0
    while (currNode !== null) {
        size++
        currNode = currNode.next
    }
    return size
}

function isEmpty(LL) {
    if (LL.head !== null) {
        return false
    } else {
        return true
    }
}

function findPrevious(LL, node) {

    if (LL.head.value === node) {
        return null
    }

    let currNode = LL.head
    while ((currNode.next !== null) && (currNode.next.value !== node)) {
        currNode = currNode.next
    }

    if ( currNode.next === null ) {
        return null;
    }

    return currNode
}

function findLast(LL) {
    if (!LL.head) {
        return 'List is empty.'
    }

    let currNode = LL.head
    while (currNode.next !== null) {
        currNode = currNode.next
    }

    return currNode
}

module.exports = {
    display,
    size,
    isEmpty,
    findPrevious,
    findLast
}