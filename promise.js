//
console.log("*******************************************");
console.log("*****************Promises.js**************************");
let somePromise  = new Promise(
    (resolve,reject) =>{
        let success = false;
        if (success){
        console.log('Successs**-------------->');
        resolve('success');
        } else {
        console.log('error***-------------->');
        reject('error');
        console.log('after***-------------->');
       
        }
    }        
);

//console.log('--->',somePromise);
somePromise.then((message)=> console.log('Than resolve  +' + message)).catch(messager=> { console.log('this  one'+ messager);});

console.log("====================");
somePromise.catch((message)=> console.log('again than   ' + message))
console.log("--------------" + somePromise.prototype);
