function FormInstance(input, text, checkbox, submit) {
  this.input = input;
  this.text = text;
  this.checkbox = checkbox;
  this.submit = submit;
  this.numberPattern = /^[\d]+$/i;
  this.alphabetPattern = /^[a-z]+$/i;
  this.emailPattern = /^[a-z0-9._]{3,}@[a-z0-9.-]{3,}\.[a-z]{2,}$/i;
  this.homePattern = /^(https|http)\:\/\/[a-zA-Z]{3,}\.[a-zA-Z]{3,}\.com$/i;
};

FormInstance.prototype.bindEvents = function() {
  var _this = this;
  this.submit.addEventListener("click", function(event){
    for (var index = 0; index < _this.input.length; index++) {
  	  switch(index){
  	    case 0:
  	  	  _this.numberCheck(index);
  	  	  break;
  	  	case 1:  
  	  	  _this.emailCheck(index);
  	  	  break;
  	  	case 2:
  	  	  _this.alphabetCheck(index);
  	  	  break;
  	  	case 4:
  	  	  _this.homeCheck(index);
  	  	  break;
  	  	default:
  	  	  break;
  	  }
  	};
  	if(_this.text.value == ""){
  	  alert("please write in textarea");
  	}
  	if(_this.checkbox.checked == false){
  	  alert("please check the checkbox");
  	}
  });
};

FormInstance.prototype.numberCheck = function(index) {
  var text = this.input[index].value,
    match;
  match = this.numberPattern.test(text);
  if(!match){
    alert("invalid id");
  }
};

FormInstance.prototype.alphabetCheck = function(index) {
  var text = this.input[index].value,
    match;
  match = this.alphabetPattern.test(text);
  if(!match){
  	alert("invalid name");
  }
};

FormInstance.prototype.emailCheck = function(index) {
  var email = this.input[index].value,
    match;
  match = this.emailPattern.test(email);
  if(match == false){
  	alert("invalid email id");
  }
};

FormInstance.prototype.homeCheck = function(index) {
  var url = this.input[index].value,
    match;
  match = this.homePattern.test(url);
  if(match == false){
  	alert("invalid url");
  }	
};

window.onload = function () {
  var instanceCreate = new FormInstance(document.getElementsByClassName('fillit'),
    document.getElementById('text'),
		document.getElementById('checkbox'),
		document.getElementById('submit'));
  instanceCreate.bindEvents();
};
