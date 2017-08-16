function SelectBoxDoc(leftListId, rightListId, addButton, deleteButton) {
  this.leftList = leftListId;
  this.rightList = rightListId;
  this.addButton = addButton;
  this.deleteButton = deleteButton;
};

SelectBoxDoc.prototype.bindEvents = function() {
  _this = this;
  this.addButton.addEventListener("click", function() {
    _this.commonEvent(_this.leftList, _this.rightList);
  });
  this.deleteButton.addEventListener("click", function() {
    _this.commonEvent(_this.rightList, _this.leftList);
  });
};

SelectBoxDoc.prototype.commonEvent = function(list1, list2) {
  for (var index = list1.length - 1; index >= 0; index--) {
    if(list1.options[index].selected == true){
      list2.appendChild(list1.options[index]);
    }
  }
};

window.onload = function() {
  var instance = new SelectBoxDoc(document.getElementById('select1'),
                                  document.getElementById('select2'),
                                  document.getElementById('add'),
                                  document.getElementById('delete'));
  instance.bindEvents();
};
