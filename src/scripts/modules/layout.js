await injectPartial('header', document.querySelector('#header'));
await injectPartial('footer', document.querySelector('#footer'));

initMenu();
initFooter();

async function injectPartial(partialName, targetElement) {
  const partialFetch = await fetch(`/partials/${partialName}.html`);
  targetElement.innerHTML = await partialFetch.text();
}

function initMenu() {
  const button = document.querySelector('#header button');
  const nav = document.querySelector('#header nav');
  const body = document.querySelector('body');

  button.addEventListener('click', (ev) => {
    nav.classList.toggle('hidden');
    body.classList.toggle('no-scroll');

    const isHidden = nav.classList.contains('hidden');
    button.textContent = isHidden ? '☰' : 'X';
  });
}

function initFooter() {
  const copyYear = document.querySelector('#copyYear');
  copyYear.textContent = new Date().getFullYear();
}
