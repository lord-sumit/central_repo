function InputHint($inputText) {
  this.$inputText = $inputText;
  this.$label = $inputText.siblings("label");
  this.labelText = this.$label.text();
};

InputHint.prototype.removeLabel = function() {
  /*Remove the label element*/
  this.$label.remove();
};

InputHint.prototype.addTextAndClassSearchInput = function() {
  this.$inputText.val(this.labelText);
  this.$inputText.addClass("hint");
};

InputHint.prototype.init = function() {
  /*Set the value of the search input to the text of the label element*/
  /*Add a class of "hint" to the search input*/
  this.addTextAndClassSearchInput();
  this.removeLabel();
  this.bindEvents();
};

InputHint.prototype.bindEvents = function() {
  /*Bind a focus event to the search input that removes the hint text and the "hint" class*/
  this.$inputText.focus(this.removeInputText);
  /*Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered*/
  this.$inputText.blur(this.restoreInputText());
};

InputHint.prototype.removeInputText = function() {
  $(this).removeAttr("class").val("");
};

InputHint.prototype.restoreInputText = function(event) {
  if(!$(event.target).val().length) {
    this.addTextAndClassSearchInput();
  }
};

$(document).ready(function() {
  var inputHint = new InputHint($("input[type = text]"));
  inputHint.init();
});
