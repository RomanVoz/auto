document.addEventListener('DOMContentLoaded', function () {
    // Вызываем функцию показа модального окна через определенное время (например, 3 секунды)
    setTimeout(openModal, 3000);
});

// Функция открытия модального окна
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Функция закрытия модального окна
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
