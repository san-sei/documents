// Load mapping file
fetch('/urls-mapping.json')
  .then((response) => response.json())
  .then((mapping) => {
    // Modify anchor hrefs
    const anchorTags = document.getElementsByTagName('a');

    for (let i = 0; i < anchorTags.length; i++) {
      const anchorTag = anchorTags[i];
      const originalHref = anchorTag.getAttribute('href');

      for (const map of mapping) {
        if (originalHref === map.original) {
          anchorTag.setAttribute('href', map.rfideas);
          break;
        }
      }
    }
  })
  .catch((err) => {
    console.log(err);
  });
