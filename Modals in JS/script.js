'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
for (let i = 0; i < showModal.length; i++) {
  // console.log(showModal[i].textContent);

  // open up the modal
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  //Close the modal
  const closeTheModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  closeModal.addEventListener('click', closeTheModal);
  overlay.addEventListener('click', closeTheModal);

  //Close the modal using the Esc key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      //   if (!modal.classList.contains('hidden'))
      closeTheModal();
    }
  });
}
