function toggle () {  
  console.log("In the toggle function")
  // Declare variable menu
  let menu = document.getElementById("side-menu");
  console.log(menu.style.display)
  // toggle code
 if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  else{
    menu.style.display = "block"; 
  }
} 

//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
    setTimeout(function(){ $(".se-pre-con").fadeOut("slow"); }, 500);
	});

