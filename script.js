let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.next-btn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

let dayTitles = document.querySelectorAll('.day-title');
let dayBlocks = document.querySelectorAll('.program-day-block');
let currentDayIndex = 0;

function showDay(index) {
    dayTitles[currentDayIndex].classList.remove('active');
    dayBlocks[currentDayIndex].classList.remove('active');
    
    currentDayIndex = (index + dayTitles.length) % dayTitles.length;
    
    dayTitles[currentDayIndex].classList.add('active');
    dayBlocks[currentDayIndex].classList.add('active');
}

document.querySelector('.day-next-btn').addEventListener('click', () => {
    showDay(currentDayIndex + 1);
});

document.querySelector('.day-prev-btn').addEventListener('click', () => {
    showDay(currentDayIndex - 1);
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('regName').value.trim();
    let phone = document.getElementById('regPhone').value.trim();
    let email = document.getElementById('regEmail').value.trim();
    let msgBox = document.getElementById('formMessage');
    
    if (name === '' || phone === '' || email === '') {
        msgBox.textContent = 'Моля, попълнете всички полета!';
        msgBox.className = 'message-box error';
        return;
    }
    
    let userData = {
        fullName: name,
        phoneNumber: phone,
        emailAddress: email,
        registrationDate: new Date().toLocaleString()
    };
    
    localStorage.setItem('festival_participant', JSON.stringify(userData));
    
    msgBox.textContent = 'Успешна регистрация';
    msgBox.className = 'message-box success';
    
    document.getElementById('registrationForm').reset();
});