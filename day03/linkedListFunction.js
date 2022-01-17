//遍历链表
module.exports = {
    mapLinkedList:(node,fn)=>{
        while (node){
            if (fn) fn(node)
            node = node.next
        }
    },
    addNode:(node)=>{

    }
}