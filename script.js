function searchName(){

let input=document.getElementById("search").value.toLowerCase();
let table=document.getElementById("gradeTable");
let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[1];

if(td){

let txt=td.textContent.toLowerCase();

if(txt.includes(input)){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}

function sendMsg(){

let input=document.getElementById("chatInput");
let msg=input.value;

if(msg==="")return;

let div=document.createElement("div");

div.textContent=msg;

document.getElementById("messages").appendChild(div);

input.value="";

}
