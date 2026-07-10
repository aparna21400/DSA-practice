function createHelloWorld() {
    function inner() {
       return "Hello World";
    }
    return inner;
}
const f = createHelloWorld();