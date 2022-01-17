const stack = [];

// 入栈
stack.push(1);
stack.push(2);

//出栈
const item1 = stack.pop();
const item2 = stack.pop();

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 1.左括号必须用相同类型的右括号闭合。
// 2.左括号必须以正确的顺序闭合。

const isValid = (s)=>{
    if(s.length %2 === 1) return false
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const next = s[i]
        if (next === "[" || next === "{" || next === "("){
            stack.push(next)
        }else {
            if(stack.length === 0) return false
            const pre = stack[stack.length - 1]
            if ((pre === "{" && next === "}") || (pre === "[" && next === "]") || (pre === "(" && next === ")")) stack.pop()
            else return false
        }
    }
    return stack.length === 0
}

console.log(isValid("]"));

// callStack

const fn1 = ()=>{
    console.log(1);
}

const fn2 = ()=>{
    fn1();
    console.log(2);
}

const fn3 = ()=>{
    fn2();
    console.log(3);
}

fn3()


