function Tabs(modules) {
  this.$divModules = modules;
  this.$firstModule = modules.first();
  this.$lastModule = modules.last();
  this.$listOfModules;
};

Tabs.prototype.bindEvents = function() {
  /*Bind a click event to the list item that:
  1.Shows the related module, and hides any other modules
  2.Adds a class of "current" to the clicked list item
  3.Removes the class "current" from the other list item*/
  this.$listOfModules.children().click(this.eventHandler());
};

Tabs.prototype.clickDisplayAndHideModule = function() {
  this.beforeBindEvent();
  this.bindEvents();
  /*Finally, show the first tab*/
  this.$listOfModules.children().eq(0).click();
};

Tabs.prototype.beforeBindEvent = function() {
  var _this = this;
  /*Hide all of the modules.*/
  this.$divModules.hide();
  /*Create an unordered list element before the first module.*/
  this.$listOfModules = $("<ul></ul>");
  (this.$listOfModules).insertBefore(this.$firstModule);
  /*Iterate over the modules using $.fn.each. For each module,
   use the text of the h2 element as the text for a list item that you add to the unordered list element.*/
  this.$divModules.each(function() {
    var text = "<li>" + $(this).find("h2").text() + "</li>";
    _this.$listOfModules.append(text);
  });
};

Tabs.prototype.eventHandler = function() {
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

Tabs.prototype.hideElementAndRemoveClass = function(hideModule) {
  $(hideModule).hide();
  $(hideModule).removeClass("current");
};

Tabs.prototype.showElementAndAddClass = function(displayModule) {
  $(displayModule).show();
  $(displayModule).addClass("current");
};

$(document).ready(function() {
  var tabs = new Tabs($(".module"));
  tabs.clickDisplayAndHideModule();
});
