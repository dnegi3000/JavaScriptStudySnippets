console.log('===========================================');
console.log('==========****** Object ******===============');
console.log('===========================================');

// Objet Lieteral 
var Person = {};
console.log( " ====Literal ======  ");
console.log( Person);
console.log( " ==========================  ");

var Deepak  = {
    name : 'Deepak',
    lname : 'negi',
    age : 30
};

console.log("Literal with details ");
console.log(Deepak);

console.log( " ==========================  ");

console.log( " ========Anonymous function assigned to a var ==========  ");

var Amy = function(){
    
    name = 'Amy';
    lname= 'negi';
    age =30;    
    console.log("Executing AMY");
}


console.log(Amy);
console.log(Amy());
console.log(new Amy());
console.log( "******* copy of amy");
var copyamy = new Amy()
console.log(copyamy);


console.log( " ==========================  ");

function PersonObj(){
 
    name = 'some';
    lname = 'negi';
    age=40;
 console.log("Executing PersonObj");
  return ;
}
    
var newPerson = new PersonObj();
console.log(newPerson);

console.log( " ==========================  ");
console.log( " ==============Another object using parameter============  ");

function PersonObj1(firstname , lname, age){
    console.log("Executing PersonObj1 this ::::"  );
    console.log(this);

    this.name = firstname;
    this.lname = lname;
    this.age=age;
    console.log("Executing PersonObj1");
   
}

var manOne = new PersonObj1('MAN1', 'Manlast name ',90);
console.log(manOne);

console.log( " ==========================  ");
console.log( " ==============Another object using parameter============  ");


function PersonObj2(){
    console.log("Executing PersonObj2 this ::::"  );
    console.log(this);

    this.name = "Deepak";
    this.lname = "NEGI";
    this.age=20;
    console.log("Executing PersonObj2");
   
}

var manTwo = new PersonObj2('MAN1', 'Manlast name ',90);
console.log(manTwo);


console.log( " ==========================  ");
console.log( " =========NEW =================  ");


function returnCar(){
       
    return function (){
        name = "name of the car ";
        manufacturer ="Default";
        typeofcar = "defatut hatch back";
    }
    
}

var  chevyBeat = new returnCar();
console.log(chevyBeat );

console.log( " ==========================  ");
console.log( " =========NEW =================  ");



function returnCar2(){
    console.log("THIS HERE.............");
    console.log(this);
       
    return function (){
            console.log("THIS HERE");
            console.log(this);
        this.name = "name of the car ";
        this.manufacturer ="Default";
        this.typeofcar = "defatut hatch back";
    }
    
}

var  chevySPark = new returnCar2();
console.log(chevySPark);
console.log(chevySPark());


