function Traversing(mainIdDiv) {
  this.$mainIdDiv = mainIdDiv;
};

Traversing.prototype.traversePath = function() {
  /*Select all of the image elements on the page; log each image's alt attribute*/
  this.imageAltDisplay();
  /*Select the search input text box, then traverse up to the form and add a class to the form.*/
  this.traverseInputTextToFormAndAddClass(this.$mainIdDiv.find("input[class = 'input_text']"));
  /*Select the list item inside #myList that has a class of "current" and remove that class from it;
    add a class of "current" to the next list item.*/
  this.$mainIdDiv.find("#myList").children(".current")
    .next().addClass("current").end().removeClass("current");
  /*Select the select element inside #specials; traverse your way to the submit button.*/
  this.$mainIdDiv.find("#specials").children().nextUntil("#fruit");
  /*Select the first list item in the #slideshow element;
   add the class "current" to it, and then add a class of "disabled" to its sibling elements.*/
  this.$mainIdDiv.find("#slideshow").children()
    .first().addClass("current").siblings().addClass("disable");
};

Traversing.prototype.imageAltDisplay = function() {
  $("img").each(function() {
    console.log(this.alt);
  });
};

Traversing.prototype.traverseInputTextToFormAndAddClass = function(inputTextBox) {
  $(inputTextBox).parent("form").addClass(inputTextBox.attr("class"));
};

$(document).ready(function() {
  var traversing = new Traversing($("#main"));
  traversing.traversePath();
});
