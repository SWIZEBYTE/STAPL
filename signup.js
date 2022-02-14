"use strict"
const signup=document.querySelector(".sign--up");
const name1 = document.querySelector(".name");
const email=document.querySelector(".email").value;
const newpassword=document.querySelector(".new-password");
const confirmpassword=document.querySelector(".confirm");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const conditions = document.querySelector(".conditions");
const form= document.querySelector(".login");

if(email===mailformat){
    email.focus()}
form.addEventListener("submit",function(event){
    event.preventDefault();
   if(name1.value==""){
        alert("please enter the valid name");
   }

if(newpassword.value.length<6){
    alert("too short password");
    return false;
}
if(newpassword.value!=confirmpassword.value){
    alert("password did not match");}
if(conditions.checked==false)
{
    alert('You must agree to the terms first.');
    return false;
}
else{
    alert("Account created sucessfully");
}



});


