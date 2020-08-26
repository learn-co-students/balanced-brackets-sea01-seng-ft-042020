const isBalanced = (equation) => {
    const closers = {"]": "[", "}": "{", ")": "("}
    const working = []
    for (let i = 0 ; i < equation.length; i++) {
        // If current element is not a closer add it to working
        if (!closers[equation[i]]) {
            working.push(equation[i])
        // If current element is a closer, check if last element was corresponding opener, if it was remove it from working
        } else {
            if (working[working.length -1] === closers[equation[i]]) {
                working.pop()
            } else {
                return false
            }
        }
    }
    // Verify working is now empty therefore the equation is balanced
    return (working.length === 0 ? true : false)
}

isBalanced("{}")