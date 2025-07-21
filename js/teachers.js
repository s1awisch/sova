document.addEventListener('DOMContentLoaded', function() {
    const subjectFilter = document.getElementById('subject-filter');
    const experienceFilter = document.getElementById('experience-filter');
    const teachers = document.querySelectorAll('.teacher-card');
    
    function filterTeachers() {
        const selectedSubject = subjectFilter.value;
        const selectedExperience = experienceFilter.value;
        
        teachers.forEach(teacher => {
            const teacherSubject = teacher.dataset.subject;
            const teacherExperience = parseInt(teacher.dataset.experience);
            
            const subjectMatch = selectedSubject === 'all' || teacherSubject.includes(selectedSubject);
            const experienceMatch = selectedExperience === 'all' || teacherExperience >= parseInt(selectedExperience);
            
            if (subjectMatch && experienceMatch) {
                teacher.style.display = 'block';
            } else {
                teacher.style.display = 'none';
            }
        });
    }
    
    subjectFilter.addEventListener('change', filterTeachers);
    experienceFilter.addEventListener('change', filterTeachers);
    
    // Обработка кнопок "Записаться к преподавателю"
    document.querySelectorAll('[data-teacher]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const teacherId = this.dataset.teacher;
            // Здесь можно добавить логику записи к конкретному преподавателю
            alert(`Запись к преподавателю ${teacherId}. В реальном сайте здесь будет форма записи.`);
        });
    });
});