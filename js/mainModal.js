const modalForm = document.querySelector('.modal-form');
const btnModalForm = document.querySelectorAll('.btn-modal-form');
const btnModalFormClose = document.querySelector('.modal-form-close-btn');

btnModalForm.forEach(btnForm => {
  btnForm.addEventListener('click', () => {
    modalForm.style.display = "block";
    modalForm.style.opacity = 1;
    modalForm.style.visibility = "visible";
  })
})

btnModalFormClose.addEventListener('click', () => {
  modalForm.style.display = "none";
  modalForm.style.opacity = 0;
  modalForm.style.visibility = "hidden";
})

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-body')) {
    modalForm.style.display = "none";
    modalForm.style.opacity = 0;
    modalForm.style.visibility = "visible";
  }
})