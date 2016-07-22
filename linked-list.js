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
     var curr = head;
     if (head === null) {
       head = node;
       return;
    }
     while (curr.next !== null) {
       curr = curr.next;
     }

     curr.next = node;
  };

   var pop = function() {
     var curr = head;
     if (head === null) {
       return null;
     }

     while (curr.next.next !== null) {
       curr = curr.next;
     }
     var node = curr.next;
     curr.next = null;
     
     return node; 
   };

  return {
    push: push,
    pop: pop, 
    toString: toString
  };

}());

var ll = LinkedList;

ll.push("A");
ll.push("B");
ll.push("C");
ll.push("THIS WILL NOT SHOW");
ll.pop();

console.log(ll.toString()); 
