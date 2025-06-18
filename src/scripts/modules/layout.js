async function injectPartial(partialName, targetElement) {
    let partialFetch = await fetch(`/partials/${partialName}.html`);
    targetElement.innerHTML = await partialFetch.text();
}

injectPartial('header', document.querySelector('#header'));
injectPartial('footer', document.querySelector('#footer'));