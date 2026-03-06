function toggleMenu(){

let menu=document.getElementById("menu");

if(menu.style.left==="0px"){
menu.style.left="-220px";
}else{
menu.style.left="0px";
}

}

function toggleDark(){

document.body.classList.toggle("dark");

}
