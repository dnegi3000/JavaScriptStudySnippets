//
console.log("*******************************************");
console.log("*****************Promises.js**************************");
let somePromise  = new Promise(
    (resolve,reject) =>{
        console.log(resolve,reject);    
    }        
    
);


console.log('--->',somePromise);
console.log('**********',somePromise.then(()=> console.log('Than resolve')
                                         ));