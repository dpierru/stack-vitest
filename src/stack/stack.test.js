import Stack from "./Stack.js"

describe("Stack class tests", () => {
    let stack;

    beforeEach(() => {      
        stack = new Stack()
    })


    it("newStack_isEmpty", () => {
        expect(stack.isEmpty()).toBe(true)
    })

    it("afterOnePush_isNotEmpty", () => {
        stack.push(42)
        expect(stack.isEmpty()).toBe(false)
    })

    it("whenEmptyStackIsPopped_willThrowException", () => {
        expect(() => stack.pop()).toThrow(Stack.UnderflowError)
    })

    it("afterOnePushAndOnePop_isEmpty", () => {
        stack.push(42)
        stack.pop()
        expect(stack.isEmpty()).toBe(true)
    })

    it("afterTwoPushAndOnePop_isNotEmpty", () => {
        stack.push(42)
        stack.push(43)
        stack.pop()
        expect(stack.isEmpty()).toBe(false)
    })

    it("afterPushingX_willPopX", () => {
        stack.push(42)
        expect(stack.pop()).toBe(42)

        stack.push(59)
        expect(stack.pop()).toBe(59)
    })

    it("afterPushXandYandPopTwice_willReturnX", () => {
        stack.push(42)
        stack.push(59)
        stack.pop();
        expect(stack.pop()).toBe(42)
    })
}) 