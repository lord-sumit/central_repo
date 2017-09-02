function selectElement(argument) {
  var $divSelect = $("div.module");
  var $selector0 = $("div[id='main'] > ul[id='myList'] > li:eq(2)");
  var $selector1 = $("#myListItem");
  var $selector2 = $("li[class='bar'] + li");
  var $selector3 = $("li:contains('List item 3')");
  var $searchLabel = $("label[for='q']");
  var $hiddenElements = $("body").find(":hidden").not("script");
  var $image = $("img[alt]");
  var $oddRow = $("tr:odd");
};

$(document).ready(selectElement);
