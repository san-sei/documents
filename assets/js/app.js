// Adds scroll position lock for default docs sidebar

if (document.querySelector('#sidebar-default') !== null) {
  let sidebar = document.getElementById('sidebar-default');

  let pos = sessionStorage.getItem('sidebar-scroll');
  if (pos !== null) {
      sidebar.scrollTop = parseInt(pos, 10);
  }

  window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('sidebar-scroll', sidebar.scrollTop);
  });
}


function resizeNavBtns(){
  var nav = document.getElementById('bottom-nav');
  var rightMenu = document.getElementById('right-side-menu');

  if(!nav)return;

  if (window.innerWidth <= 650){
    nav.classList.add('row');
    rightMenu.classList.remove('position-fixed');
    nav.classList.remove('d-flex');
  }
  else{
    nav.classList.add('d-flex');
    rightMenu.classList.add('position-fixed');
    nav.classList.remove('row');
  }
  
}

window.onload = function(){
  resizeNavBtns()
}

addEventListener('resize',()=>{
  var nav = document.getElementById('bottom-nav');
  var rightMenu = document.getElementById('right-side-menu');
  
    if(!nav)return;

    if(window.innerWidth >= 651){
      nav.classList.add('d-flex');
      rightMenu.classList.add('position-fixed');
      nav.classList.remove('row');
    }
    else if (window.innerWidth <= 650){
      nav.classList.add('row');
      rightMenu.classList.remove('position-fixed');
      nav.classList.remove('d-flex');
    }
    else{
      return;
    }
  
});

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