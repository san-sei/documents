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

  if (window.innerWidth > 650){
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
