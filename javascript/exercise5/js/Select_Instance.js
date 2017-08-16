function SelectInstance(selectLeftSelectBox, selectRightSelectBox, addButton, deleteButton) {
  this.selectLeftSelectBox = selectLeftSelectBox;
  this.selectRightSelectBox = selectRightSelectBox;
  this.addButton = addButton;
  this.deleteButton = deleteButton;
};

SelectInstance.prototype.bindEvents = function() {
  _this = this;
  this.addButton.addEventListener("click", function() {
    for (var index = _this.selectLeftSelectBox.length - 1; index >= 0; index--) {
      if(_this.selectLeftSelectBox.options[index].selected == true){
        _this.addElement(_this.selectLeftSelectBox, _this.selectRightSelectBox, index);
        _this.deleteElement(_this.selectLeftSelectBox, index);
      }
    }
  });
  this.deleteButton.addEventListener("click", function() {
    for (var index = _this.selectRightSelectBox.length - 1; index >= 0; index--) {
      if(_this.selectRightSelectBox.options[index].selected == true){
        _this.addElement(_this.selectRightSelectBox, _this.selectLeftSelectBox, index);
        _this.deleteElement(_this.selectRightSelectBox, index);
      }
    }
  });
};

SelectInstance.prototype.addElement = function(select1, select2, index) {
  var newOption = new Option(select1.options[index].text, select1.options[index].value);
  select2.appendChild(newOption);
};

SelectInstance.prototype.deleteElement = function(select1, index) {
  select1.remove(index);
};

window.onload = function() {
  var instance = new SelectInstance(document.getElementById('selectLeftSelectBox'),
                                    document.getElementById('selectRightSelectBox'),
                                    document.getElementById('addButton'),
                                    document.getElementById('deleteButton'));
  instance.bindEvents();
};
