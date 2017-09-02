function Things(parent, color, movies, drink, bikes) {
  this.parentList = parent;
  this.childColor = color;
  this.childMovies= movies;
  this.childDrink = drink;
  this.childBikes = bikes;
};

Things.prototype.bindEvents = function() {
  _this=this;
  var index;
    this.parentList[0].addEventListener("click", function() {
      debugger;
      index=0;
      if(this.checked == true){
        _this.subListVisibility(index);
      }
      else{
        _this.subListHidden(index);
      }
    });
    this.parentList[1].addEventListener("click", function() {
      debugger;
      index=1;
      if(this.checked == true){
        _this.subListVisibility(index);
      }
      else{
        _this.subListHidden(index);
      }
    });
    this.parentList[2].addEventListener("click", function() {
      debugger;
      index=2;
      if(this.checked == true){
        _this.subListVisibility(index);
      }
      else{
        _this.subListHidden(index);
      }
    });
    this.parentList[3].addEventListener("click", function() {
      debugger;
      index=3;
      if(this.checked == true){
        _this.subListVisibility(index);
      }
      else{
        _this.subListHidden(index);
      }
    });
};

Things.prototype.subListVisibility = function(index) {
  debugger;
  switch(index){
    case 0:
      for(var i = 0; i < this.childColor.length; i++) {
        this.childColor[i].style.visibility = 'visible';
      }
      break;
    case 1:
      for (var i = 0; i < this.childMovies.length; i++) {
        this.childMovies[i].style.visibility = 'visible';
      }
      break;
    case 2:
      for (var i = 0; i < this.childDrink.length; i++) {
        this.childDrink[i].style.visibility ='visible';
      }
      break;
    case 3:
      for (var i = 0; i < this.childBikes.length; i++) {
        this.childBikes[i].style.visibility = 'visible';
      }
      break;
    default :{}
  }
};

Things.prototype.subListHidden = function(index) {
  debugger;
  switch(index){
    case 0:
      for(var i = 0; i < this.childColor.length; i++) {
        this.childColor[i].style.visibility = 'hidden';
        this.childColor[i].checked = false;
      }
      break;
    case 1:
      for (var i = 0; i < this.childMovies.length; i++) {
        this.childMovies[i].style.visibility = 'hidden';
        this.childMovies[i].checked = false;
      }
      break;
    case 2:
      for (var i = 0; i < this.childDrink.length; i++) {
        this.childDrink[i].style.visibility ='hidden';
        this.childDrink[i].checked = false;
      }
      break;
    case 3:
      for (var i = 0; i < this.childBikes.length; i++) {
        this.childBikes[i].style.visibility = 'hidden';
        this.childBikes[i].checked = false;
      }
      break;
    default : {}
  }
};

window.onload = function (){
  var instance = new Things(document.getElementsByClassName('parent'),
                            document.getElementsByClassName('childofcolor'),
                            document.getElementsByClassName('childofmovies'),
                            document.getElementsByClassName('childofdrink'),
                            document.getElementsByClassName('childofbikes'));
  instance.bindEvents();
};
