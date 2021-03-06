function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const ancors = () => {
  const links = document.querySelectorAll('.js-ancor-link');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const elemData = link.getAttribute('href');
      const elem = document.querySelector(`${elemData}`);
      const elemCoords = getCoords(elem);
      const finalCoords = elemCoords.top - 100;

      $("html, body").animate({ scrollTop: finalCoords });
    });
  });
};

ancors();

console.log('wefew');