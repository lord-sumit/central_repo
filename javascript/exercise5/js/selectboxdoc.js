function SelectBoxDoc(leftListId, rightListId, addButton, deleteButton) {
  this.leftList = leftListId;
  this.rightList = rightListId;
  this.addButton = addButton;
  this.deleteButton = deleteButton;
};

SelectBoxDoc.prototype.bindEvents = function() {
  _this = this;
  this.addButton.addEventListener("click", function() {
    commonEvent(_this.leftList, _this.rightList);
  });
  this.deleteButton.addEventListener("click", function() {
    commonEvent(_this.rightList, _this.leftList);
  });
};

SelectBoxDoc.prototype.commonEvent = function(list1, list2) {
  for (var index = list1.length - 1; index >= 0; index--) {
    if(list1.options[index].selected == true){
      var newOption = new Option(list1.options[index].text, list1.options[index].value);
      list2.appendChild(newOption);
      list1.remove(index);
    }
  }
};

window.onload = function() {
  var instance = new se(document.getElementById('selectLeftSelectBox'),
                                    document.getElementById('selectRightSelectBox'),
                                    document.getElementById('addButton'),
                                    document.getElementById('deleteButton'));
  instance.bindEvents();
};
