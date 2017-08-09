window.onload = function() {
  var caller = new Checker(null);
  caller.bindEvent();
};

function Checker(prom) {
  this.prom = prom;
};

Checker.prototype.bindEvent = function() {
  debugger;
  var i='y';
  while(i=='y')
  {
  	var prom1 = prompt("enter your name","");
  	this.prom = prom1;
    var pattern = /^[a-z]+$/;
    var match = pattern.exec(this.prom);
    if(match==null){
  	  alert("wrong input");
    }
    else if (match.lastindex==this.prom.length){
  	  alert("wrong input");
    }
    else{
      i='n';	
      alert("hello : "+this.prom);
    }
  }  
}