function openMenu(){

let menu = document.getElementById("menu");

if(menu.style.width === "250px"){
menu.style.width="0";
}else{
menu.style.width="250px";
}

}

/* กดที่อื่นปิดเมนู */

document.addEventListener("click",function(e){

let menu = document.getElementById("menu");
let btn = document.querySelector(".menu-btn");

if(menu.style.width==="250px"){

if(!menu.contains(e.target) && !btn.contains(e.target)){
menu.style.width="0";
}

}

});

/* โหมดมืด */

function toggleTheme(){
document.body.classList.toggle("dark-mode");
}

/* ค้นหาชื่อ */

function searchName(){

let input=document.getElementById("search");
let filter=input.value.toLowerCase();
let tr=document.querySelectorAll("#studentTable tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[2];

if(td){

let txt=td.textContent;

tr[i].style.display=
txt.toLowerCase().indexOf(filter)>-1 ? "" : "none";

}

}

}

/* แชท */

function sendMessage(){

let input=document.getElementById("chatInput");
let msg=input.value;

if(msg.trim()!==""){

let div=document.createElement("div");
div.textContent=msg;

document.getElementById("messages").appendChild(div);

input.value="";

}

}
