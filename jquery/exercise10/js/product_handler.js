function ProductHandler($brandViseSelection, $colorViseselection, $soldout, $images) {
  this.$brand = $brandViseSelection;
  this.$color = $colorViseselection;
  this.$soldout = $soldout;
  this.$images = $images;
  this.jsonInventory = [];
  this.checkedFilter = [];
  this.imageNo = 0;
};

ProductHandler.prototype.init = function() {
  var _this = this;
  $.ajax({
    type : 'get',
    dataType : 'json',
    url : 'js/product_data.json',
    success : function(response) {
      _this.createDataList(response);
    }
  });
};

ProductHandler.prototype.createDataList = function(dataJSON) {
  var _this = this;
  dataJSON.forEach(function(event) {
    var createOption = new Product(event);
    _this.jsonInventory.push(createOption);
  });
};

ProductHandler.prototype.bindEvent = function() {
  $(".selector").click(this.showImagesViaBrand.bind(this));
};

ProductHandler.prototype.showImagesViaBrand = function() {
  this.$images.removeClass("image");
  var propertyType = "brand";
  this.checkedCheckbox(this.$brand.children(), propertyType);
  this.displayImages(propertyType);
  if(!this.checkedFilter.length) {
    this.$images.removeClass("image");
  }
  this.showImagesViaColor();
};

ProductHandler.prototype.showImagesViaColor = function() {
  var propertyType = "color";
  this.checkedCheckbox(this.$color.children(), propertyType);
  this.displayImages(propertyType);
  this.showImagesViaStock();
};

ProductHandler.prototype.showImagesViaStock = function() {
  var propertyType = "soldOut";
  this.checkedCheckbox(this.$soldout, propertyType);
  this.displayImages(propertyType);
};

ProductHandler.prototype.checkedCheckbox = function(searchBase, propertyType) {
  var _this = this;
  this.checkedFilter = [];
  searchBase.filter(":checked").each(function() {
    _this.checkedFilter.push(this.getAttribute(propertyType));
  });
};

ProductHandler.prototype.displayImages = function(property) {
  var checkedFilterLength = this.checkedFilter.length;
  var imageNameSame;
  while(this.imageNo < 20) {
    if(!this.$images.eq(this.imageNo).hasClass("image")) {
      imageNameSame = "yes";
      var arrayNo = 0;
      for(; arrayNo < checkedFilterLength; arrayNo++) {
        imageNameSame = "no";
        if($(this.jsonInventory[this.imageNo]).attr(property) == this.checkedFilter[arrayNo]) {
          imageNameSame = "yes";
          break;
        }
      }
      if(imageNameSame == "yes") {
        this.$images.eq(this.imageNo).removeClass("image");
      }
      else {
        this.$images.eq(this.imageNo).addClass("image");
      }
    }
    this.imageNo += 1;
  }
  this.imageNo = 0;
};

$(document).ready(function() {
  var productHandler = new ProductHandler($("#brand_selection"), $("#color_selection")
    , $("#soldout_filter"), $("#right_section").children());
  productHandler.init();
  productHandler.bindEvent();
});
