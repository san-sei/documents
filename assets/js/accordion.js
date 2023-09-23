var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    const activeAcc = document.getElementsByClassName('accordion active')[0];
    if (activeAcc && activeAcc != this) {
      activeAcc.nextElementSibling.style.maxHeight = null;
      activeAcc.classList.toggle('active');
    }
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
