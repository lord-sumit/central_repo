function Lists(parent, color, movies, drink, bikes) {
  this.parentList = parent;
  this.childColors = color;
  this.childMovies = movies;
  this.childDrinks = drink;
  this.childBikes = bikes;
};

Lists.prototype.bindEvents = function() {
  _this = this;
  for(var index = 0; index < this.parentList.length; index++){
    this.parentList[index].addEventListener("click", function() {
      if(this.checked == true){
        _this.subListVisibility(event.target.value);
      }
      else{
        _this.subListHidden(event.target.value);
      }
    });
  }
};

Lists.prototype.subListVisibility = function(value) {
  var subListValue;
  switch(value){
    case "colors":
      subListValue = this.childColors;
      break;
    case "movies":
      subListValue = this.childMovies;
      break;
    case "drinks":
      subListValue = this.childDrinks;
      break;
    case "bikes":
      subListValue = this.childBikes;
      break;
    default :{}
  }
  for(var index = 0; index < subListValue.length; index++) {
    subListValue[index].style.visibility = 'visible';
  }
};

Lists.prototype.subListHidden = function(value) {
  var subListValue;
  switch(value){
    case "colors":
      subListValue = this.childColors;
      break;
    case "movies":
      subListValue = this.childMovies;
      break;
    case "drinks":
      subListValue = this.childDrinks;
      break;
    case "bikes":
      subListValue = this.childBikes;
      break;
    default :{}
  }
  for(var index = 0; index < subListValue.length; index++) {
    subListValue[index].checked = false;
    subListValue[index].style.visibility = 'hidden';
  }
};

window.onload = function() {
  var instance = new Lists(document.getElementsByClassName('parent'),
                           document.getElementsByClassName('childofcolor'),
                           document.getElementsByClassName('childofmovies'),
                           document.getElementsByClassName('childofdrink'),
                           document.getElementsByClassName('childofbikes'));
  instance.bindEvents();
};
