// node/this-4.js

var object = {
  id: "xyz",
  printId: function() {
    console.log('The id is '+
        this.id + ' ' +
        this.toString());
  }
};

// setTimeout(
//     function(){ object.printId(); },
//     100);
var callback = function() {
    object.printId();
};
callback();
