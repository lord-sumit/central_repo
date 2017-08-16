function ParentCheckbox(parent) {
  this.parentCheckbox = parent;
}

ParentCheckbox.prototype.bindEvents = function() {
  this.parentCheckbox[0].addEventListener("click", function (argument) {

  });
};

ParentCheckbox.prototype.method_name = function(first_argument) {

};

window.load =function (){
  var instance = new ParentCheckbox(document.getElementsByClassName('parent'));
  instance.bindEvents();
};
