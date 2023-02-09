// Get the modal
var modal = document.getElementById('_modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName('doc-img-frame');
var modalImg = document.getElementById('img01');

// Go through all of the images with our custom class
for (var i = 0; i < imgs.length; i++) {
var img = imgs[i];
// and attach our click listener for this image.
img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
}
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = 'none';
}
