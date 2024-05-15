document.addEventListener("DOMContentLoaded", function() {
  var playBtn = document.getElementById("play-btn");
  var imageContainer = document.getElementById("image-container");
  var video = document.getElementById("background-video");

  var images = [
    'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888535/dam_exclu_vsz4hq.jpg','https://res.cloudinary.com/dncaa02l9/image/upload/v1715769033/damsuspi_n3c6zt.jpg', 'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888535/dambut_tr37v4.jpg', 'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888536/dambut1_mlk4p3.jpg', 'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888536/dampuni_h5n4sz.jpg',
    'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888535/damreve_sohh0u.jpg', 'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888535/damsad_eqap9x.jpg', 'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888535/damsouffre_tgwc5i.jpg', 'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888536/damtete_qzp47x.png', 'https://res.cloudinary.com/dncaa02l9/image/upload/v1706888536/damwatch_gxem5g.jpg'
  ];

  function hideVideo() {
    video.style.display = "none";
  }

  function showRandomImage() {
    imageContainer.innerHTML = "";
    var randomIndex = Math.floor(Math.random() * images.length);
    var img = document.createElement("img");
    img.src = images[randomIndex];
    imageContainer.appendChild(img);
  }

  playBtn.addEventListener("click", function() {
    hideVideo();
    showRandomImage();
  });
});

// dam.js
document.addEventListener("DOMContentLoaded", function() {
  var gotoEndPageBtn = document.getElementById("gotoEndPage");

  gotoEndPageBtn.addEventListener("click", function() {
      // Redirect to the end page (dam-end.html)
      window.location.href = "dam-end.html";
  });
});
