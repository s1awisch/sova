document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Сохраняем исходный текст кнопки
    const originalBtnText = submitBtn.textContent;
    
    // Показываем загрузку
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    // Отправляем форму
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Показываем успех
            submitBtn.textContent = '✓ Отправлено!';
            form.reset();
            
            // Можно показать дополнительное сообщение
            const alert = document.createElement('div');
            alert.className = 'form-alert';
            alert.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
            form.appendChild(alert);
            
            setTimeout(() => {
                alert.style.opacity = '0';
                setTimeout(() => alert.remove(), 500);
            }, 3000);
        } else {
            throw new Error('Ошибка отправки');
        }
    })
    .catch(error => {
        // Показываем ошибку
        submitBtn.textContent = 'Ошибка!';
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    })
    .finally(() => {
        // Через 3 секунды возвращаем кнопку в исходное состояние
        setTimeout(() => {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }, 3000);
    });
});