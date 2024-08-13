const plusIcons = document.querySelectorAll('.plus-icon');

plusIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const content = icon.nextElementSibling; 
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            icon.textContent   
 = '-'; 
        } else {
            content.style.display = 'none';
            icon.textContent = '+'; 
        }
    });
});