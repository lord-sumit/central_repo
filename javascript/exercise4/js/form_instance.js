function form_instance(fillit, text, checkbox, submit_b) {
  this.input = fillit;
  this.text = text;
  this.checkbox = checkbox;
  this.submit_b = submit_b;
};

form_instance.prototype.bindEvents = function() {
  var _this = this;
  this.submit_b.addEventListener("click", function(event){
    for (var i = 0; i < _this.input.length; i++) {
  	  switch(i){
  	    case 0:
  	  	  _this.numberCheck(i);
  	  	  break;
  	  	case 1:  
  	  	  _this.emailCheck(i);
  	  	  break;
  	  	case 2:
  	  	  _this.alphabetCheck(i);
  	  	  break;
  	  	case 3:
  	  	  
  	  	  break;
  	  	case 4:
  	  	  _this.homeCheck(i);
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

form_instance.prototype.numberCheck = function(i) {
  var match;
  var pattren = /^[\d]+$/i;	
  var text = this.input[i].value;
  match = pattren.test(text);
  if(!match){
    alert("invalid id");
  }
};

form_instance.prototype.alphabetCheck = function(i) {
  var match;
  var pattren = /^[a-z]+$/i;
  var text = this.input[i].value;
  match = pattren.test(text);
  if(!match){
  	alert("invalid name");
  }
};

form_instance.prototype.emailCheck = function(i) {
  var email=this.input[i].value,
      pattern = /^[a-z0-9._]{3,}@[a-z0-9.-]{3,}\.[a-z]{2,}$/i,
      match;
  match = pattern.test(email);
  if(match == false){
  	alert("invalid email id");
  }
};

form_instance.prototype.homeCheck = function(i) {
  var url=this.input[i].value,
      pattern = /^(https|http)\:\/\/[a-zA-Z]{3,}\.[a-zA-Z]{3,}\.com$/i,
      match;
  match = pattern.test(url);
  if(match == false){
  	alert("invalid url");
  }	
};

window.onload = function () {
  var instance_create = new form_instance(document.getElementsByClassName('fillit'),
  										                    document.getElementById('text'),
							                     			  document.getElementById('checkbox'),
									                        document.getElementById('submit_b'));
  instance_create.bindEvents();
};