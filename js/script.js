let users = [];
let object = []
document.getElementById("signupform").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    if (users.some(user => user.username === username)) {
        alert("This Account Is Already Exist Plaese Signup With Another Account");
    } else {
        users.push(
            {
            username: username,
            password: password
            }
        );
        alert("Account Successfully Signup");
        document.getElementById("signupForm");
    }
});
document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Login successful Welcome " + username);
        document.getElementById("loginForm");
    } else {
        alert("This Account Is Not Exist Please Enter Your UserName And Password Correctly");
    }
    document.getElementById("newpage").style.display = "block"
});
console.log('users', users)
function showlogin(){
    document.getElementById("logincard").style.display = "block"
    document.getElementById("signupcard").style.display = "none"
    // document.getElementById("newpage").style.display = "block"
}
function showsignup(){
    document.getElementById("signupcard").style.display = "block"
    document.getElementById("logincard").style.display = "none"
    // document.getElementById("newpage").style.display = "none"
}
function newpage (){
    document.getElementById("logincard").style.display = "none"
    document.getElementById("signupcard").style.display = "none"
    document.getElementById("newpage").style.display = "none"
    document.getElementById("todo").style.display = "block"
}
function page(){  
    let userobject = {
    title: document.getElementById("text").value,
    date: document.getElementById("datetime").value,
    createdAt: new Date(),  
    description: document.getElementById("description").value,  
    }
    object.push(userobject)
    console.log('object', object)
  }
  function pushid(){
    let push = Math.random().toString(36).slice(2)
    object.push(push)
    console.log('push', push)
  }
  function handleShowTable() {
    if (!object.length) {
        showNotification("there is no single Title", "error")
        return;
    }
    let tableStartingCode = `<div class="table-responsive"><table class="table text-center">`
    let tableHead = `<tr style="margin-left: 50px;"><th>#</th><th>Title</th><th>Date</th><th>ID</th><th>CreatedAt</th><th>Description</th></tr>`
    let tableEndingCode = `</table></div>`
    let tableBody = ""
    for (let i = 0; i < object.length; i++) {
        tableBody += `<tr><td>${i + 1}</td><td>${object[i].title}</td><td>${object[i].date}</td><td>${object[i].id}</td><td>${object[i].createdAt}</td><td>${object[i].description}</td></tr>`
    }
    // for (let i = 0; i < users.length; i++) {
    //     userBody += `<tr><td>${i + 1}</td><td>${object[i].username}</td></tr>`
    // }
    // let userHead = `<tr style="margin-left: 50px;"><th>#</th><th>UserName</th></tr>`
    let table = tableStartingCode + tableHead + tableBody + tableEndingCode
    // let user = userHead + userBody 
    // document.getElementById("output").innerHTML = user
    document.getElementById("output").innerHTML = table

}