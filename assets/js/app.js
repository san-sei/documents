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
  else{
    nav.classList.add('d-flex');
  }
  
  if (window.innerWidth >= 651){
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
  resizeNavBtns();
}

addEventListener('resize',()=>{
  var nav = document.getElementById('bottom-nav');
  var rightMenu = document.getElementById('right-side-menu');
  
    if(!nav)return;
    else if(window.innerWidth >= 651){
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


function findOccurrences(str, word) {
  const occurrences = [];
  for (let j = 0; j < str.length; j++) {
    if (str.substring(j, j + word.length) === word) {
      occurrences.push(j);
    }
  }
  return occurrences;
}

(function() {
  const letteredLists = document.querySelectorAll('.docs-content ol li');

  for (let i = 0; i < letteredLists.length; i++) {
    let letteredListsPattern = /[\r\n|\r|\n]+([A-Za-z]+)\. /g;
    if (letteredListsPattern.exec(letteredLists[i].innerHTML)) {
      letteredLists[i].innerHTML = letteredLists[i].innerHTML.replace(letteredListsPattern, '<span>$1</span>');

      const openSpan = '<span>', closeSpan = '</span>';
      const openSpanIndices = findOccurrences(letteredLists[i].innerHTML, openSpan);
      const closeSpanIndices = findOccurrences(letteredLists[i].innerHTML, closeSpan);

      const letteredList = document.createElement('div');
      letteredList.classList.add('lettered-list');

      for (let j = 0; j < openSpanIndices.length; j++) {
        const k = j == openSpanIndices.length - 1 ? letteredLists[i].innerHTML.length : j + 1;

        const content = document.createElement('div');
        content.innerHTML = letteredLists[i].innerHTML.substring(closeSpanIndices[j] + closeSpan.length, openSpanIndices[k]);
        content.classList.add('lettered-list__content');

        const itemNo = document.createElement('div');
        itemNo.innerHTML = letteredLists[i].innerHTML.substring(openSpanIndices[j] + openSpan.length, closeSpanIndices[j]);
        itemNo.classList.add('lettered-list__item-no');

        const item = document.createElement('div');
        item.classList.add('lettered-list__item');

        item.append(itemNo);
        item.append(content);

        letteredList.append(item);
      }

      letteredLists[i].innerHTML = letteredLists[i].innerHTML.substring(0, openSpanIndices[0]);
      letteredLists[i].append(letteredList);
    }
  }
})();
