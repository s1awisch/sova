document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const courses = document.querySelectorAll('.course-detail');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Фильтрация курсов
            courses.forEach(course => {
                if (category === 'all' || course.dataset.category.includes(category)) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            });
        });
    });
});