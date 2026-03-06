function toggleMenu(){
let menu = document.getElementById("menu");

if(menu.style.left === "0px"){
menu.style.left = "-200px";
}else{
menu.style.left = "0px";
}
}

function searchStudent(){

let input = document.getElementById("searchInput");
let filter = input.value.toLowerCase();

let rows = document.querySelectorAll("tbody tr");

rows.forEach(function(row){

let name = row.cells[1].innerText.toLowerCase();

if(name.includes(filter)){
row.style.display="";
}else{
row.style.display="none";
}

});

}
