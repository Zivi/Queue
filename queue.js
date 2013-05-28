function Queue() {

  this.start = null;

  this.isEmpty = function() {
    return this.start === null;
  };

  this.enQueue = function(val) {

    var node = {
      val: val,
      next: null
    }
    if (this.start === null) {
      this.start = node;
    } else {
      node.next = this.start;
      this.start = node;
    };
  };

  this.deQueue = function() {
    if (this.start === null) {
      return null;
    };
    var prev = null;
    var node = this.start;

    while (node.next != null) {
      prev = node;
      node = node.next;
    };
    if (prev === null) {
      this.start = null;
    } else {
      prev.next = null;
    };
    return node.val;
  };

  this.size = function() {
    var node = this.start;
    var counter = 0;
    while (node != null) {
      counter ++;
      node = node.next;
    };
    return counter;
  };
};