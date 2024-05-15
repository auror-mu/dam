// dam-end.js
document.addEventListener("DOMContentLoaded", function() {
  var gotoHomePageBtn = document.getElementById("gotoHomePage");

  gotoHomePageBtn.addEventListener("click", function() {
      // Redirect to the home page (dam.html)
      window.location.href = "dam.html";
  });

  // Retrieve the search attribute value and set it as the image source
  var finalImg = document.getElementById("final-img");
  var searchURL = finalImg.getAttribute("search");
  finalImg.setAttribute("src", searchURL);

  // Log the searchURL
  console.log("Search URL:", searchURL);
});
