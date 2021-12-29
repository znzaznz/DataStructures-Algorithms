//模拟栈
let stack = []

// 入栈
stack.push(1)
stack.push(2)

// 出栈
stack.pop()

console.log(stack);

//封装栈
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return !this.items.length;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
}