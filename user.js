// var listUser =[
//     {
//         "id": 1,
//         "email": "michael.lawson@reqres.in",
//         "first_name": "Michael",
//         "last_name": "Lawson",
      
//     },
//     {
//         "id": 2,
//         "email": "lindsay.ferguson@reqres.in",
//         "first_name": "Lindsay",
//         "last_name": "Ferguson",
       
//     },
//     {
//         "id": 3,
//         "email": "tobias.funke@reqres.in",
//         "first_name": "Tobias",
//         "last_name": "Funke",
        
//     },
//     {
//         "id": 4,
//         "email": "byron.fields@reqres.in",
//         "first_name": "Byron",
//         "last_name": "Fields",
        
//     },
//     {
//         "id": 5,
//         "email": "george.edwards@reqres.in",
//         "first_name": "George",
//         "last_name": "Edwards",
        
//     },
//     {
//         "id": 6,
//         "email": "rachel.howell@reqres.in",
//         "first_name": "Rachel",
//         "last_name": "Howell",
        
//     }
// ];





//save(listUser);


//localStorage.setItem('users',JSON.stringify(listUser));
// function save(){
//     
// }
var listAlluser=JSON.parse(localStorage.getItem('users'));
function loadData(data){
    var html ='';
    var id=1;
    data.forEach((element) => {
    html += `
      <tr>
          <td style="text-align: center;">${id}</td>
          <td>${element.first_name} ${element.last_name}</td>
          <td>${element.email}</td>
          
          <td class="btn-crud">
          <a href="./edit.html"><button data-id="${element.id}" class="btn edit" onclick="editUser(this)"><i class="fa-solid fa-pen-clip"></i></button></a>
          <button class="btn delete" onclick="deleteUser(${id-1})" ><i class="fa-solid fa-trash"></i></button></td>  
      </tr>
    `;
    id++
    document.getElementById("tb-user").innerHTML = html;
    });
}
loadData(listAlluser);
  
function deleteUser(index){
    var listUser = JSON.parse(localStorage.getItem('users'));
    var del = listUser[index];
    console.log(del);
    var result = confirm("Bạn có muốn xóa user này?");
    if (result == true) {
        alert("Bạn đồng ý xóa");
        for (var i = 0; i < listUser.length; i++){
            if (listUser[i] == del) {
                listUser.splice(i, 1);
            }
        }
        console.log(listUser);
        //save();
        localStorage.setItem('users',JSON.stringify(listUser));
        loadData(listUser);
    } else {
        alert("Bạn không xóa");
    }    
    
}

 function editUser($this){
    var id = parseInt($this.getAttribute('data-id'));
    var userEdit;
    var listUser = JSON.parse(localStorage.getItem('users'));
    for(let i in listUser){
        if(listUser[i].id==id){
            userEdit=listUser[i];
        }
    }
    localStorage.setItem('user_edit',JSON.stringify(userEdit));
    console.log(userEdit);
    
}


function search(){
    var btnsearch = document.getElementById('search-user').value;
    var listAlluser = JSON.parse(localStorage.getItem('users'))
    if(btnsearch==""){
        //alert ('Fill email you want to search !')
        loadData(listAlluser);
    }
    else{
        var listSearch=[];    
        var pattern = new RegExp(btnsearch,'g')
        var result = null;
        for (var i = 0; i < listAlluser.length; i++){
            if(listAlluser[i].email.match(pattern)){
                result=listAlluser[i];
                listSearch.push(result);
            }
        }
        console.log(listSearch);
        
        loadData(listSearch);

        // if(listSearch.length===0){
        //    alert ('Email không tồn tại')
        //    loadData(listAlluser);
        // }
    }

}
