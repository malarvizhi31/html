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

}   
 function addno(){
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2").value);
    let total=a+b;
    document.getElementById("answer").innerHTML=total;
    
}
console.log("for loop");

for(let i=0;i<5;i++){
    console.log(i)
}
console.log("array loop");
const l=["a","b","c","d"];
for( let i=0;i<l.length;i++){
    console.log (l[i]);
}

 let no=10;
 console.log("while loop");
while(no>=5){
    console.log(no);
    no=no-1;
}
console.log("do while");
let i=0;
do{
    console.log(i);
    i++;
}
while(i<=5);

console.log("for in loop");
const stu={
    name:"malar",
    grade:"1"
};
for(let key in stu){
    console.log(key);
}
console.log("for of loop");
const s=["a","b"];
for(let val of s){
    console.log(val);
}