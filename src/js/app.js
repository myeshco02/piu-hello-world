const message = 'Witaj w kursie PIU!';
console.log(message);

const button = document.createElement('button');
button.textContent = 'Kliknij mnie';
button.addEventListener('click', () => {
    alert('Przycisk został kliknięty!');
});
document.body.appendChild(button);
