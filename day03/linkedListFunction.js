//้ๅ้พ่กจ
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