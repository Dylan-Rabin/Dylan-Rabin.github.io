function toggle () {
    // Declare variable menu
  let menu = document.getElementById("side-menu");

  // toggle code
 if (menu.style.display === "none") {
    menu.style.display = "block";
  }
  else{
    menu.style.display = "none"; 
  }
} 
  
  document.getElementById("ham-button").addEventListener("click",toggle);



