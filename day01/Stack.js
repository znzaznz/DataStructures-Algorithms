/**
 * @FileName: Stack.ts
 * @Description: 栈结构的封装
 * @author xiaoznz
 * @date 2021-07-14 16:32
 */

//栈类
class Stack {

    constructor() {
        this.items = []
    }

    /**
     * 压入元素到栈顶的方法
     * @param ele
     */
    push(ele) {
        this.items.push(ele);
    }

    /**
     * 弹出栈顶元素
     * @return: 弹出的栈顶元素
     */
    pop() {
        return this.items.pop()
    }

    // 查看栈顶元素
    peek() {
        return this.items[this.items.length - 1];
    }

    // 栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }

//  返回栈结构里面的元素个数
    size() {
        return this.items.length;
    }

//  打印栈结构里面的所有元素，以字符串的形式打印
    toString() {
        return this.items.join(',');
    }
}

export {Stack}