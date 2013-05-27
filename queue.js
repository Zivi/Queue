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

};