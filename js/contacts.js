document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь должна быть реальная валидация и отправка формы
            // В данном примере просто имитируем успешную отправку
            
            // Собираем данные формы
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            console.log('Данные формы:', data);
            
            // Показываем сообщение об успехе
            alert('Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
            
            // Очищаем форму
            contactForm.reset();
            
            // В реальном проекте здесь будет AJAX-запрос к серверу
            /*
            fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Сообщение отправлено!');
                    contactForm.reset();
                } else {
                    alert('Ошибка: ' + data.message);
                }
            })
            .catch(error => {
                alert('Произошла ошибка при отправке формы');
                console.error(error);
            });
            */
        });
    }
});