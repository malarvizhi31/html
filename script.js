function changetext(){
    document.getElementById("heading").innerHTML="text changed sucesssfully";
}
function changecolor(){
document.getElementById("heading").style.color="red";
}
function showalert(){
    alert("welcome to js");
}
function hidetext(){
    document.getElementById("para").style.display="none";
}
function showtext(){
    document.getElementById("para").style.display="block";
}
function displayname(){
    let name=document.getElementById("username").value;
    document.getElementById("result").innerHTML="hello"+name;

}    function addno(){
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2").value);
    let total=a+b;
    document.getElementById("answer").innerHTML=total;
    
}
