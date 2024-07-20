console.time("timeout")
setTimeout(() => {
    greet();
});
console.timeEnd("timeout");

console.time("inner")
function outer(inner) {
    inner();
}
console.timeEnd("inner");


function greet() {
    console.log('====================================');
    console.log("Greetings");
    console.log('====================================');
}
outer(greet)