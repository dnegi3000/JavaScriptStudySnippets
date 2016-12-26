//Closure // modules 


function User() {
    'use strict'
    var username, password;
    function doLogin(user, pwd) {
        username = user;
        password = pwd;
    }
    
    var publicAPI = {
        login: doLogin
    };
    
    console.log(`returning the publicAPI  : ${publicAPI}`  );
    return publicAPI;
    
    
}

var deepak = new User();

deepak.login('Deepak','Negi');




function greet(message){
    
    return function(firstname, lastname){
        
        console.log(message+ ' ' + firstname+' '+ lastname  );
    }

}
var action = greet('Hello');

action('deepak ','negi');
