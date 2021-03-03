const { findLast, findPrevious } = require('./supplemental-functions')
const LinkedList = require('./LinkedList')

function reverse(lst) {
    const newList = new LinkedList();
    newList.head = findLast(lst)
    let currNew = newList.head
    let oldNode = findPrevious(lst, currNew.value)
    while (oldNode !== null) {
        currNew.next = oldNode
        currNew = currNew.next
        oldNode = findPrevious(lst, currNew.value)
    }
    currNew.next = null
    return newList
}

/* ------ RECURSIVE ATTEMPT ------- */
// function reverse(lst) {
//     const reversedList = new LinkedList(); 
//     reversedList.head = findLast(lst)
//     function traverse(oldList, newList) {
//         const newLast = findLast(newList).value
//         const oldNode = findPrevious(oldList, newLast)
//         if (oldNode !== null) {
//             newLast.next = oldNode
//             traverse(oldList, newList)
//         } else {

//         }
//     }
//     traverse(lst, reversedList)
// }

module.exports = reverse;