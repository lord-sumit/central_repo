function SlideShow(slideShow ,header ,list) {
  this.$slideShowElement = slideShow;
  this.$header = header;
  this.$list = list;
  this.$element;
  this.$nextElement;
};

SlideShow.prototype.bindEvents = function() {
  (this.$slideShowElement.remove()).insertBefore(this.$header);
  this.$element = this.$list.children().last();
  this.$nextElement = this.$element.next();
  this.fader();
};

SlideShow.prototype.fader = function() {
  var this_ = this;
  this.$element.fadeIn(300).delay(2000).fadeOut(300,function () {
    this_.elementCheck(this_.$nextElement);
    this_.$element = this_.$nextElement;
    this_.$nextElement = this_.$nextElement.next();
    this_.fader();
  });
};

SlideShow.prototype.elementCheck = function(element) {
  if(!element.length){
    this.$nextElement = this.$list.children().first();
  }
  else{
    this.$nextElement = this.$nextElement;
  }
};

$(function(){
  var instance = new SlideShow($("#slideshow") ,$("#header") ,$("#myList"));
  instance.bindEvents();
});
