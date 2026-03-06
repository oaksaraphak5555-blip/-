function toggleMenu(){
document.getElementById("menu").classList.toggle("show");
}

function sendMsg(){

let msg=document.getElementById("msg").value;
let box=document.getElementById("chatBox");

box.innerHTML += "<p>"+msg+"</p>";

document.getElementById("msg").value="";
}

function searchName(){

let input=document.getElementById("search").value.toLowerCase();
let table=document.getElementById("studentTable");
let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[1];

if(td){

let txt=td.textContent;

if(txt.toLowerCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}
