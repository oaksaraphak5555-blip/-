function openMenu(){

let menu=document.getElementById("menu");

if(menu.style.width=="250px"){
menu.style.width="0";
}else{
menu.style.width="250px";
}

}

/* โหมดมืด */

function toggleDark(){

document.body.classList.toggle("dark");

}

/* ค้นหาชื่อ */

function searchName(){

let input=document.getElementById("search").value.toLowerCase()

let tr=document.querySelectorAll("#studentTable tr")

for(let i=1;i<tr.length;i++){

let name=tr[i].children[2].innerText.toLowerCase()

if(name.includes(input)){
tr[i].style.display=""
}else{
tr[i].style.display="none"
}

}

}

/* แชท */

function sendMessage(){

let input=document.getElementById("chatInput")

let box=document.getElementById("chatBox")

if(input.value!=""){

let p=document.createElement("p")

p.textContent=input.value

box.appendChild(p)

input.value=""

box.scrollTop=box.scrollHeight

}

}
