 function getName(){
    var username =document.getElementById('name');
    if(username.value==="")
    {
        alert("enter your name");
    }
    else
    {
        document.getElementById('input').innerHTML='Hello'+' ' +username.value 
       +' ' +'Welcome to the bootcamp';
    }
}
