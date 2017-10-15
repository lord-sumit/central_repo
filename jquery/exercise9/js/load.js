function Load() {
  this.blogDiv = arguments[0];
};

Load.prototype.bindEvents = function(first_argument) {
  this.blogDiv.children().last().children().find("h3").each(function(){$(this).after("<div></div>")});
  this.blogDiv.children().last().children().find("div").each(function(){
                                                               $(this).attr("class","target")});
  this.blogDiv.children().last().children().find("a").each(function(){
                                                      $(this).data("href" ,$(this).parent().next())});
  this.blogDiv.children().last().children().find("h3").each(function(){
                                                              $(this).click(function(event){debugger;
                                                                              $(this).next()
                                                                              .load('/blog.html');
                                                                              event.preventDefault();
                                                                            })
                                                            });
};

$(document).ready(function (argument) {
  var instance = new Load($("#blog"));
  instance.bindEvents();
});
