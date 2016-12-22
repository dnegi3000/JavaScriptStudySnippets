//Closure // modules 


function User() {
    var username, password;
    function doLogin(user, pwd) {
        username = user;
        password = pwd;
    }
    
    var publicAPI = {
        login: doLogin
    };
    
    console.log(" returning the publicAPI  :" + publicAPI);
    return publicAPI;
    
    
}

var deepak = new User();

deepak.login('Deepak','Negi');
