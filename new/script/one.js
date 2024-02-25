var x = [
    {dp:"https://photos.google.com/u/2/photo/AF1QipOEzN2p3aCi7o06CsGcR70z2ssGmFd7MsufPNa7",story:"https://photos.google.com/u/2/photo/AF1QipOEzN2p3aCi7o06CsGcR70z2ssGmFd7MsufPNa7"},
     
       //
    {dp:"../new/images/D (1).jpg",story:"../new/images/D (1).jpg"},
    {dp:"../new/images/D (2).jpg",story:"../new/images/D (2).jpg"},
    {dp:"../new/images/D (3).jpg",story:"../new/images/D (3).jpg"},
    {dp:"../new/images/D (4).jpg",story:"../new/images/D (4).jpg"},
    {dp:"../new/images/D (5).jpg",story:"../new/images/D (5).jpg"},
  //
  
    {dp:"../new/images/A (1).jpg",story:"../new/images/A (1).jpg"},
    {dp:"../new/images/A (2).jpg",story:"../new/images/A (2).jpg"},
    {dp:"../new/images/A (3).jpg",story:"../new/images/A (3).jpg"},
    {dp:"../new/images/A (4).jpg",story:"../new/images/A (4).jpg"},
    {dp:"../new/images/A (5).jpg",story:"../new/images/A (5).jpg"},
    {dp:"../new/images/A (6).jpg",story:"../new/images/A (6).jpg"},
    {dp:"../new/images/A (7).jpg",story:"../new/images/A (7).jpg"},
    {dp:"../new/images/A (8).jpg",story:"../new/images/A (8).jpg"},
    {dp:"../new/images/A (9).jpg",story:"../new/images/A (9).jpg"},
    {dp:"../new/images/A (10).jpg",story:"../new/images/A (10).jpg"},
    {dp:"../new/images/A (11).jpg",story:"../new/images/A (11).jpg"},
    {dp:"../new/images/A (12).jpg",story:"../new/images/A (12).jpg"},
    
    //

    {dp:"../new/images/B (1).jpg",story:"../new/images/B (1).jpg"},
    {dp:"../new/images/B (3).jpg",story:"../new/images/B (3).jpg"},
    {dp:"../new/images/B (4).jpg",story:"../new/images/B (4).jpg"},
    {dp:"../new/images/B (5).jpg",story:"../new/images/B (5).jpg"},
    {dp:"../new/images/B (6).jpg",story:"../new/images/B (6).jpg"},
    {dp:"../new/images/B (7).jpg",story:"../new/images/B (7).jpg"},
    {dp:"../new/images/B (8).jpg",story:"../new/images/B (8).jpg"},
    {dp:"../new/images/B (9).jpg",story:"../new/images/B (9).jpg"},
    {dp:"../new/images/B (10).jpg",story:"../new/images/B (10).jpg"},
    {dp:"../new/images/B (11).jpg",story:"../new/images/B (11).jpg"},
    {dp:"../new/images/B (12).jpg",story:"../new/images/B (12).jpg"},
    

    
    // jpeg images
    
      {dp:"../new/images/X (2).jpeg",story:"../new/images/X (2).jpeg"},
      {dp:"../new/images/X (4).jpeg",story:"../new/images/X (4).jpeg"},
      {dp:"../new/images/X (6).jpeg",story:"../new/images/X (6).jpeg"},
      {dp:"../new/images/X (10).jpeg",story:"../new/images/X (10).jpeg"},
      {dp:"../new/images/X (12).jpeg",story:"../new/images/X (12).jpeg"},
      {dp:"../new/images/X (11).jpeg",story:"../new/images/X (14).jpeg"},
     {dp:"../new/images/X (13).jpeg",story:"../new/images/X (15).jpeg"},
    
      
     //jpg images

        
      {dp:"../new/images/X (4).jpg",story:"../new/images/X (4).jpg"},
    
      {dp:"../new/images/X (5).jpg",story:"../new/images/X (5).jpg"},
    
      {dp:"../new/images/X (6).jpg",story:"../new/images/X (6).jpg"},
    
      {dp:"../new/images/X (7).jpg",story:"../new/images/X (7).jpg"},
    
      {dp:"../new/images/X (8).jpg",story:"../new/images/X (8).jpg"},
    
    
      // {dp:"",story:""},
       // {dp:"",story:""},
      // {dp:"",story:""},
       // {dp:"",story:""},
      // {dp:"",story:""},
       // {dp:"",story:""},
      // {dp:"",story:""},
       // {dp:"",story:""},
      // {dp:"",story:""},
       // {dp:"",story:""},
      // {dp:"",story:""},
       // {dp:"",story:""},
      // {dp:"",story:""},
       // {dp:"",story:""},
      // {dp:"",story:""},
      { dp: "https://wallpapercave.com/wp/wp5768394.jpg", story: "https://mixingimages.in/wp-content/uploads/2023/09/Radha-Krishna-Images-3D-819x1024.jpg" },
      { dp: "https://photosfile.com/wp-content/uploads/2023/11/Radha-Krishna-102.jpg", story: "https://w0.peakpx.com/wallpaper/508/374/HD-wallpaper-radha-krishna-new-baby-radha-krishna-lord-god-bhakti-devtional.jpg" }
            
        ];



      




  
  var clutter = "";
  
  x.forEach(function (elem, idx) {
    clutter += `
      <div id="story">
        <img id="${idx}" src="${elem.dp}" />
      </div>
    `;
  });
  
  
  var block = document.querySelector(".sec1");
  var dk = document.querySelector("#show-img");
  
  block.innerHTML = clutter;
  
 


  block.addEventListener("click", function (dets) {
    if (dets.target.tagName === "IMG") {
      var index = parseInt(dets.target.id);
  
        dk.innerHTML = `    <img id="v" src="${x[index].story}" />` ;

      document.querySelector("#full-screen").style.display = "block";
    //   document.querySelector("#full-screen").style.backgroundImage = `url(${x[index].story})`;
    }
      setTimeout( function(){
         document.querySelector("#full-screen").style.display = "none";
      },2500)



  });


  /* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
  

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




window.addEventListener('scroll', function() {
  var storyLine = document.getElementById('story_line_1');
  var position = storyLine.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3; // Adjust as needed

  if (position < screenPosition) {
      storyLine.classList.add('animate');
  }
});
