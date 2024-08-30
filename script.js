const cars = document.querySelectorAll('.open-popup');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.getElementById('close-modal');
const autoName = document.querySelector('.auto-name');

cars.forEach(car => car.addEventListener('click', openModal))
closeModalBtn.addEventListener('click', closeModal)

function openModal(evt) {
    console.log(evt.currentTarget.dataset.name)
    popup.classList.remove('hidden');
    overlay.style.display = 'block';
    autoName.textContent = evt.currentTarget.dataset.name;
}

function closeModal() {
    popup.classList.add('hidden');
    overlay.style.display = 'none';
}