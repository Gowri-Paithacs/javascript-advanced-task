//flatten a deeply nested array without flat() 
function flattenDeep(arr) {
    let stack = [arr];
    let result = [];
    while (stack.length > 0) {
        let item = stack.pop();
        if (Array.isArray(item)) {
            for (let i = item.length - 1; i >= 0; i--) {
                stack.push(item[i]);
            }
        } else {
            result.push(item);
        }
    }
    return result;
}
const nested = [1, [2, [3, [4, [5]]]]];
console.log(flattenDeep(nested));