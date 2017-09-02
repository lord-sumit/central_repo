function EventBind(argument) {
  var d = $("label").text();
  $("label").next().val(d);
  $("label").next().attr("class","hint");
  $("label").remove();
  $(".hint").focus(function(){$(this).removeAttr("class");$(this).val("");});
  $("#search>input").first().blur(function(){debugger; if(!($(this).val())){$(this).attr("class","hint");$(this).val(d);}});
}
$(document).ready(EventBind);
