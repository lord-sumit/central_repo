function Navigation(list) {
  this.$list = list;
};

Navigation.prototype.bindEvents = function() {
  /*1.Hovering over an item in the main menu should show that item's submenu items, if any.
    2.Exiting an item should hide any submenu items.*/
  this.$list.find("li").hover(this.hoverOnElement);
};

Navigation.prototype.hoverOnElement = function() {
  $(this).toggleClass("hover").find("ul").toggle();
};

$(document).ready(function() {
  var navigation = new Navigation($("#nav"));
  navigation.bindEvents();
});
