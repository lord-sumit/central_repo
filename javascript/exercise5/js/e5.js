function SelectInstance(select1, select2, add, dlete) {
  this.select1 = select1;
  this.select2 = select2;
  this.add = add;
  this.delete = dlete;
};

SelectInstance.prototype.bindEvents = function() {
  _this = this;
  this.add.addEventListener("click", function(event) {
    for (var index = _this.select1.length - 1; index >= 0; index--) {
      if(_this.select1.options[index].selected == true)
      {
        _this.adder(_this.select1, _this.select2, index);
        _this.deleter(_this.select1, index);
      }
    }
  });
  this.delete.addEventListener("click", function() {
    for (var index = _this.select2.length - 1; index >= 0; index--) {
      if(_this.select2.options[index].selected == true){
        _this.adder(_this.select2, _this.select1, index);
        _this.deleter(_this.select2, index);
      }
    }
  });
};

SelectInstance.prototype.adder = function(select1, select2, index) {
  var newOption = new Option(select1.options[index].text, select1.options[index].valu);
  var len = select2.length;
  select2.appendChild(newOption);
};

SelectInstance.prototype.deleter = function(select1, index) {
  select1.remove(index);
};

window.onload = function () {
  var instance = new SelectInstance(document.getElementById('select1'),
                                    document.getElementById('select2'),
                                    document.getElementById('add'),
                                    document.getElementById('delete'));
  instance.bindEvents();
};
