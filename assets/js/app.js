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
    letteredLists[i].innerHTML = letteredLists[i].innerHTML.replace(/<br>/g, '\n');

    const letteredListPattern = /[\r\n|\r|\n]+([A-Za-z]+)\. /g;
    if (letteredListPattern.exec(letteredLists[i].innerHTML)) {
      letteredLists[i].innerHTML = letteredLists[i].innerHTML.replace(letteredListPattern, '<span>$1</span>');

      const openSpan = '<span>', closeSpan = '</span>';
      const openSpanIndices = findOccurrences(letteredLists[i].innerHTML, openSpan);
      const closeSpanIndices = findOccurrences(letteredLists[i].innerHTML, closeSpan);

      const letteredList = document.createElement('div');
      letteredList.classList.add('lettered-list');
      letteredList.style.marginTop = '20px';

      for (let j = 0; j < openSpanIndices.length; j++) {
        const k = j == openSpanIndices.length - 1 ? letteredLists[i].innerHTML.length : j + 1;

        const content = document.createElement('div');
        content.innerHTML = letteredLists[i].innerHTML.substring(closeSpanIndices[j] + closeSpan.length, openSpanIndices[k]);
        content.classList.add('lettered-list__content');
        content.style.paddingLeft = '40px';

        const itemNo = document.createElement('div');
        itemNo.innerHTML = letteredLists[i].innerHTML.substring(openSpanIndices[j] + openSpan.length, closeSpanIndices[j]);
        itemNo.classList.add('lettered-list__item-no');
        itemNo.style.width = '20px';
        itemNo.style.height = '20px';
        itemNo.style.position = 'absolute';
        itemNo.style.top = '3.5px';
        itemNo.style.left = '0';
        itemNo.style.backgroundColor = document.documentElement.hasAttribute('data-dark-mode') ? 'rgba(38, 48, 53, 0.6)' : 'rgb(230, 247, 255)';
        itemNo.style.color = '#0186c2';
        itemNo.style.fontSize = '14px';
        itemNo.style.lineHeight = '1.5';
        itemNo.style.textAlign = 'center';
        itemNo.style.borderRadius = '50%';

        const item = document.createElement('div');
        item.classList.add('lettered-list__item');
        item.style.display = 'flex';
        item.style.marginBottom = '20px';
        item.style.position = 'relative';

        item.append(itemNo);
        item.append(content);

        letteredList.append(item);
      }

      letteredLists[i].innerHTML = letteredLists[i].innerHTML.substring(0, openSpanIndices[0]);
      letteredLists[i].append(letteredList);
    }
  }
})();
