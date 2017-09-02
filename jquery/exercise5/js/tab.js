function Tab($modules) {
  this.$divModules = $modules;
  this.$listOfModules;
};

Tab.prototype.bindEvent = function() {
  /*Bind a click event to the list item that:
  1.Shows the related module, and hides any other modules
  2.Adds a class of "current" to the clicked list item
  3.Removes the class "current" from the other list item*/
  this.$listOfModules.children().click(this.eventHandler());
};

Tab.prototype.init = function() {
  debugger;
  /*Hide all of the modules.*/
  this.hideElement(this.$divModules);
  /*Create an unordered list element before the first module.*/
  /*Iterate over the modules using $.fn.each. For each module,
   use the text of the h2 element as the text for a list item that you add to the unordered list element.*/
  this.createList(this.$listOfModules);
  this.bindEvent();
  /*Finally, show the first tab*/
  this.$listOfModules.children().eq(0).click();
};

Tab.prototype.createList = function($listOfModules) {
  $listOfModules = $("<ul></ul>");
  $listOfModules.insertBefore(this.$firstModule);
  this.$divModules.each(function() {
    debugger;
    var text = "<li>" + $(this).find("h2").text() + "</li>";
    text.data("this.div");
    _this.$listOfModules.append(text);
  });
};

Tab.prototype.eventHandler = function() {
  var _this = this;
  return function() {
    if(_this.$firstModule.find("h2").text() == $(this).text()) {
      _this.showElementAndAddClass(_this.$firstModule);
      _this.hideElementAndRemoveClass(_this.$lastModule);
    }
    else {
      _this.showElementAndAddClass(_this.$lastModule);
      _this.hideElementAndRemoveClass(_this.$firstModule);
    }
  }
};

Tab.prototype.hideElement = function($Module) {
  $Module.hide();
  $Module.removeClass("current");
};

Tab.prototype.showElement = function($Module) {
  $Module.show();
  $Module.addClass("current");
};

$(document).ready(function() {
  var tab = new Tab($(".module"));
  tab.init();
});
