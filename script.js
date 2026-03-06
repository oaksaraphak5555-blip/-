function toggleMenu(){

let menu=document.getElementById("menu");

if(menu.style.left==="0px"){
menu.style.left="-250px";
}else{
menu.style.left="0px";
}

}

/* ปิดเมนูเมื่อกดพื้นที่อื่น */

document.addEventListener("click",function(e){

let menu=document.getElementById("menu");

if(!menu.contains(e.target) && !e.target.classList.contains("menu-btn")){
menu.style.left="-250px";
}

})

/* DARK MODE */

function toggleDark(){

document.body.classList.toggle("dark");

}

/* CHAT */

function sendChat(){

let input=document.getElementById("chatInput")
let box=document.getElementById("chatBox")

if(input.value!=""){

let p=document.createElement("p")
p.textContent=input.value

box.appendChild(p)

input.value=""

}

}

/* SEARCH STUDENT */

function searchStudent(){

let input=document.getElementById("searchInput").value.toLowerCase()
let rows=document.querySelectorAll("tbody tr")

rows.forEach(row=>{

let name=row.children[2].textContent.toLowerCase()

row.style.display=name.includes(input)?"":"none"

})

}

/* NEWS SYSTEM */

function addNews(){

let input=document.getElementById("newsInput")
let list=document.getElementById("newsList")

if(input.value!=""){

let li=document.createElement("li")

li.innerHTML=input.value+" <button onclick='this.parentElement.remove()'>ลบ</button>"

list.appendChild(li)

input.value=""

}

  }
