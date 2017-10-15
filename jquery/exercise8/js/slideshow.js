function SlideShow($slideShow) {
  this.$slideShowElementChildren = $slideShow;
};

SlideShow.prototype.Duration = 300;

SlideShow.prototype.init = function() {
  /*1.Move the #slideshow element to the top of the body.*/
  this.insertElement($("body"), this.$slideShowElementChildren);
  this.bindEvent();
};

SlideShow.prototype.insertElement = function($insertIn, $moveElement) {
  $insertIn.prepend($moveElement.parent());
};

SlideShow.prototype.bindEvent = function() {
  /*2.Write code to cycle through the list items inside the element;
      fade one in, display it for a few seconds, then fade it out and fade in the next one
    3.When you get to the end of the list, start again at the beginning.*/
  this.$slideShowElementChildren.fadeToggle();
  this.$slideShowElementChildren.first().fadeToggle(this.Duration, this.fadeInOut());
  /*4.For an extra challenge, create a navigation area under the slideshow
      that shows how many images there are and which image you're currently viewing.*/
};

SlideShow.prototype.fadeInOut = function() {
  var _this = this;
  return function() {
    var $nextElement;
    if(!($(this).next().length)) {
      $nextElement = _this.$slideShowElementChildren.first();
    }
    else {
      $nextElement = $(this).next();
    }
    $(this).fadeToggle();
    $nextElement.fadeToggle(_this.Duration, _this.fadeInOut());
  };
};

$(document).ready(function() {
  var slideshow = new SlideShow($("#slideshow > li"));
  slideshow.init();
});
