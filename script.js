function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

function searchStudent(){
  let input = document.getElementById("searchInput").value.toLowerCase();
  let rows = document.querySelectorAll("tbody tr");

  rows.forEach(function(row){
    if(row.textContent.toLowerCase().includes(input)){
      row.style.display="";
    }else{
      row.style.display="none";
    }
  });
}
