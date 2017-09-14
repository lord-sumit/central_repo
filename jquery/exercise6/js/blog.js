function Blog($blog) {
  this.$blogDiv = $blog;
};

Blog.prototype.bindEvents = function() {
  /*Clicking on a headline in the #blog div should slide down the excerpt paragraph*/
  /*Clicking on another headline should slide down its excerpt paragraph,
    and slide up any other currently showing excerpt paragraphs.*/
  this.$blogDiv.find("h2, h3").click(this.displayBlog());
};

Blog.prototype.displayBlog = function() {
  var _this = this;
  return function(event) {
    if(this.textContent == "Blog") {
      _this.slideDownElement($(this).siblings().find("h3"));
    }
    else {
      event.preventDefault();
      _this.slideDownElement(this);
      _this.slideUpElement(this);
    }
  };
};

Blog.prototype.slideDownElement = function($headers) {
  $headers.next().slideDown("slow");
};

Blog.prototype.slideUpElement = function($headers) {
  $headers.parent().siblings().find("p").slideUp("slow");
};

$(document).ready(function() {
  var blog = new Blog($("#blog"));
  blog.bindEvents();
});
