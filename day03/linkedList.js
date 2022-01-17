const {mapLinkedList} = require('./linkedListFunction')

function Node(value){
    this.value = value
    this.next = null
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')

a.next = b
b.next = c

mapLinkedList(a,(e)=>{
    console.log(e.value);
})