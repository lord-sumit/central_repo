function Manipulate(argument) {
  $("#myList").append("<li> </li>");
  $("#myList > li").filter(": odd").remove();
  $("div: .module").last().append("<h2> </h2>","<p> </p>");
  $("select").append("<option>wednesday</option>");
  $("select > option").last().attr("value" , "wednesday");
  var $d = $("#slideshow > li").eq(0).children().eq(1)
  $("div").last().attr("class" , "module").append("$d");
  var myItem = [];
  for (var i = 0; i < 5; i++) {
    myItem.push("<li>item" + i + "</li>");
  }
  $("#myList").append(myItem.join(""));
  $("select").append(("<option/>" , { html : "wednesday", "value" : "wednesday"}));
};

$(document).ready(Manipulate);
