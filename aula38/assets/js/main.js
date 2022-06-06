const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // Todo a estilização do body CSS
const backgroundColorBody = estilosBody.backgroundColor;
const Color = estilosBody.color;
// console.log(backgroundColorBody);


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}