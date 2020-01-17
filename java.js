var modal = document.querySelector('#my-modal');
var modalBtn = document.querySelector('#modal-btn');
var closeBtn = document.querySelector('.close');


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);



function openModal() {
  modal.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
}





