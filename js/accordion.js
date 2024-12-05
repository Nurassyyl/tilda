const btnAccordionCharacteristics = document.querySelector(".all-characteristics");
const panel = document.querySelector(".specification-boxes");
panel.style.maxHeight = panel.style.scrollHeight + "px";
panel.classList.add('specification-boxes-close');

btnAccordionCharacteristics.addEventListener('click', () => {
  panel.classList.toggle('specification-boxes-close');
  document.querySelector(".all-characteristics-head").classList.toggle('active');
})


window.addEventListener('scroll', () => {
  if (pageYOffset > document.getElementById('inner').offsetTop) {
    document.getElementById('inner').style.position = "fixed";
  } else {
    document.getElementById('inner').style.position = "";
  }
})
