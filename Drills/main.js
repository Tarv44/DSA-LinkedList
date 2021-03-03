const LinkedList = require('./LinkedList')
const { display, size, isEmpty, findPrevious, findLast } = require('./supplemental-functions')
const reverse = require('./reverse')

function main() {
    const SLL = new LinkedList();

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')

    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 2)

    display(SLL)
    console.log(size(SLL))
    console.log('Filled list is empty', isEmpty(SLL))
    console.log('Empty list is empty', isEmpty(new LinkedList()))
    console.log('Previous to Apollo:', findPrevious(SLL, 'Apollo'))
    console.log('Previous to foobar', findPrevious(SLL, 'foobar'))
    console.log('Last node is', findLast(SLL))
    display(reverse(SLL))
}

main()