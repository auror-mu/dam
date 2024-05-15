document.addEventListener("DOMContentLoaded", function() {
  var gotoHomePageBtn = document.getElementById("gotoHomePage");

  gotoHomePageBtn.addEventListener("click", function() {
      window.location.href = "dam.html";
  });

  var finalImg = document.getElementById("final-img");
  var searchURL = finalImg.getAttribute("search");
  finalImg.setAttribute("src", searchURL);

  console.log("Search URL:", searchURL);
});
