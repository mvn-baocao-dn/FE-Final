
var userEdit =JSON.parse(localStorage.getItem("user_edit"));

var listUser = JSON.parse(localStorage.getItem('users'));

var idUS=userEdit.id
console.log(idUS);

document.getElementById('email').value=userEdit.email;
document.getElementById('first_name').value=userEdit.first_name;
document.getElementById('last_name').value=userEdit.last_name;
var kq ;    
// var btnEdit = document.getElementById('btnEdit');
// btnEdit.addEventListener('click',editUser());
function editUser(){
        for(let i in listUser){
            if(listUser[i].id==idUS){
                
                listUser[i].email=document.getElementById('email').value;
                listUser[i].first_name=document.getElementById('first_name').value;
                listUser[i].last_name=document.getElementById('last_name').value;
                kq=listUser[i];
                console.log(kq); 
            }
                    
        }
        localStorage.setItem('users',JSON.stringify(listUser));  
       alert('Edit successful.')
        
}

