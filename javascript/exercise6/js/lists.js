function Lists(parent_list) {
  this.parentList = parent_list;
  this.subList;
};

Lists.prototype.bindEvents = function() {
  _this = this;
  this.parentList.addEventListener("click", function () {
    for (var index = 0; index < _this.parentList.children.length; index++) {
      if(_this.parentList.children[index].children[0].checked == true){
        _this.subList = _this.parentList.children[index].children[1];
        _this.subList.style.visibility = "visible";
        _this.subList.style.display = "block";
      }
      else{
        _this.subList = _this.parentList.children[index].children[1];
        _this.subList.style.visibility = "hidden";
        _this.subList.style.display = "none";
        for (var subListIndex = 0; subListIndex < _this.subList.children.length; subListIndex++) {
          _this.subList.children[subListIndex].children[0].checked = false;
        }
      }
    }
  })
};

window.onload = function(event) {
  var list = new Lists(document.getElementById('list'));
  list.bindEvents();
};
