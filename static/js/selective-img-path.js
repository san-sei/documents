function loadImagesBasedOnURL() {
  var currentURL = window.location.hostname;
  var imageTags = document.getElementsByTagName('img');

  for (var i = 0; i < imageTags.length; i++) {
    var imgTag = imageTags[i];
    var imagePath = imgTag.getAttribute('src');
    currentURL = 'idmelon.com';
    // Modify the image source based on the current URL
    if (imagePath) {
      if (imagePath.includes('global')) continue;
      if (currentURL.includes('idmelon')) {
        imagePath = imagePath.replace(
          '/images/vendor/',
          '/images/vendor/idmelon/'
        );
      } else if (currentURL.includes('rfideas')) {
        imagePath = imagePath.replace(
          '/images/vendor/',
          '/images/vendor/rfideas/'
        );
      }
    }
    imgTag.setAttribute('src', imagePath);
  }
}

document.addEventListener('DOMContentLoaded', loadImagesBasedOnURL);
