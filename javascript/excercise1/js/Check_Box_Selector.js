function CheckBoxSelector(container){
  this.checkboxes = container.getElementsByClassName('colour');
  this.checkAllLink = document.getElementById('check_all');
  this.checkNoneLink = document.getElementById('uncheck_all');
};

CheckBoxSelector.prototype.bindEvents = function() {
  var _this = this;
  this.checkAllLink.addEventListener("click",function(){
    _this.assignAll(true);
  });
  this.checkNoneLink.addEventListener("click",function(){
    _this.assignAll(false);
  });
};

CheckBoxSelector.prototype.assignAll = function (bool) {
  for (var i = 0,len = this.checkboxes.length; i < len; i++)
	this.checkboxes[i].checked = bool;
};

window.onload = function(){
  var checkbox = new CheckBoxSelector(document.getElementById("container"));
  checkbox.bindEvents();
};