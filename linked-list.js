var LinkedList = (function() {
  var head = null;

  var newNode = function(val) {
    return {
      data: val,
      next: null
    };
  };

  var toString = function() {
    var output = [];
    var curr = head;
    while (curr !== null) {
      output.push(curr.data);
      curr = curr.next;
    }
    
    return output.join(" -> ");
  };

   var push = function(val) {
     var node = newNode(val);
     if (head === null) {
       head = node;
       return;
    }
  };

  return {
    push: push,
    toString: toString
  };

}());

var ll = LinkedList;

ll.push("A");

console.log(ll.toString()); 
