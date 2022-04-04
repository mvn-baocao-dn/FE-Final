function insertUser(){
    //var fd = new FormData(time)
    var idUs = Math.floor((Math.random() * 100) + 1);
    var emailUs = document.getElementById('email').value;
    var first_nameUs=document.getElementById('first_name').value;
    var last_nameUs=document.getElementById('last_name').value;
    if(emailUs==""||first_nameUs==""||last_nameUs==""){
        alert ('Please fill all infomation');
    }else{
    var object = {
            id:idUs,
            email:emailUs,
            first_name:first_nameUs,
            last_name:last_nameUs,
    };
    var userAfter = JSON.parse(localStorage.getItem('users'));
    //console.log(userAfter);
    userAfter.push(object);
    // console.log(userAfter);
    localStorage.setItem('users',JSON.stringify(userAfter));
    alert("Create user successfull ");
    }
    
}



