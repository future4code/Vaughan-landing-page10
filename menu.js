
// Com os conceitos de DOM esse arquivo manipula os eventos do botão hamburguer do menu para setar atributos de acessibilidade


const btnMobile = document.getElementById('btn-mobile');
const modal= document.getElementById('menu');


function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

  
  
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


modal.addEventListener('click', clickHandler);

function clickHandler () { 
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');

}