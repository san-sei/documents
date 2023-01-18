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
  if(!nav)return;
  if (window.innerWidth <= 650){
    nav.classList.add('row');
    nav.classList.remove('d-flex');
  }
  else{
    nav.classList.add('d-flex');
    nav.classList.remove('row');
  }
  
}

window.onload = function(){
  resizeNavBtns()
}

addEventListener('resize',()=>{
  var nav = document.getElementById('bottom-nav');
  
  if(!nav)return;

  if(window.innerWidth >= 651){
    nav.classList.add('d-flex');
    nav.classList.remove('row');
  }
  else if (window.innerWidth <= 650){
    nav.classList.add('row');
    nav.classList.remove('d-flex');
  }
  else{
    nav.classList.add('d-flex');
    nav.classList.remove('row');
  }	
});
