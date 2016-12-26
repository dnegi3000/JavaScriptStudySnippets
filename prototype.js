function A() {     
    console.log("Check this");
   
    this.cc = "Name";
}

function B() {     
    console.log("Check this B");
   
    this.dd = "HELLO";
     this.inner = function(){}
    
    return this.dd;
}

var x =  new A();

var y = new B();




//console.log(x.XX());
