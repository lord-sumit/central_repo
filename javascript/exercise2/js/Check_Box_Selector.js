function CheckBoxSelector(alphabet, none) {
  this.checkboxes = alphabet;
  this.none = none;
};

CheckBoxSelector.prototype.bindEvents = function() {
  var _this = this;
  this.none.addEventListener("click",function () {
    _this.assignbool();
  });

  for (var i = 0; i < this.checkboxes.length; i++) {
	this.checkboxes[i].onchange = function () {
		if (this.checked) {
			this.checked = false;
			_this.checking(this);
		};
	};
  };
};

CheckBoxSelector.prototype.checking = function (elem) {
  var count = 1;
  for (var i = this.checkboxes.length - 1; i >= 0; i--) {
	if(this.checkboxes[i].checked == true){
		count++;
	}
  };
  if(count > 3){
	alert("you cann't click more than three");
  }
  else{
	elem.checked = true;
  }
};

CheckBoxSelector.prototype.assignbool = function () {
  for (var i = this.checkboxes.length - 1; i >= 0; i--) {
	this.checkboxes[i].checked = false;
  };
};

window.onload = function () {
  var checkbox = new CheckBoxSelector(document.getElementsByClassName('alphabet'),document.getElementById('none'));
  checkbox.bindEvents();
};