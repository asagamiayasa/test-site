function setName (){
    var user = prompt("enter your name");
    localStorage.setItem('name', user);
    document.querySelector('h1').textContent = "Hello, " + user;

}

if(!localStorage.getItem('name')){
    setName();
    user = localStorage.getItem('name');
    
    } else{
        var user = localStorage.getItem('name');
        document.querySelector('h1').textContent = "Hello, " + user;
    }
