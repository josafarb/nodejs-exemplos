// node/this-2.js

function f1() {
    console.log(this);
}

var obj1 = { id: "Foo"};
f1.call(obj1, 'parametro 1', 1);

var obj2 = { id: "Bar"};
f1.apply(obj2, ['parametro 2', 222]);

f1();
