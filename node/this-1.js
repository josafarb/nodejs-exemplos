// node/this-1.js

function f1() {
    console.log(this);
}

var obj = {
    id: "An object",
    f1: f1
};

obj.f1();

f1();
