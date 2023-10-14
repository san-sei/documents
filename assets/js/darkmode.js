const mode = document.getElementById('mode');

if (mode !== null) {

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {

    if (event.matches) {

      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-dark-mode', '');

    } else {

      localStorage.setItem('theme', 'light');
      document.documentElement.removeAttribute('data-dark-mode');

    }

  })

  mode.addEventListener('click', () => {

    document.documentElement.toggleAttribute('data-dark-mode');
    localStorage.setItem('theme', document.documentElement.hasAttribute('data-dark-mode') ? 'dark' : 'light');

    const letteredListItemNos = document.querySelectorAll('.lettered-list__item-no');
    for (let i = 0; i < letteredListItemNos.length; i++) {
      letteredListItemNos[i].style.backgroundColor = document.documentElement.hasAttribute('data-dark-mode') ? 'rgba(38, 48, 53, 0.6)' : 'rgb(230, 247, 255)';
    }

  });

  if (localStorage.getItem('theme') === 'dark') {

    document.documentElement.setAttribute('data-dark-mode', '');

  } else {

    document.documentElement.removeAttribute('data-dark-mode');

  }

}
