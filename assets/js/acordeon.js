


document.addEventListener('DOMContentLoaded', () => {
    const acordeonArrows = document.querySelectorAll('.acordeon .arrow');

    acordeonArrows.forEach(arrow => {
        const acordeon = arrow.parentElement;
        acordeon.classList.remove('open'); // Remove 'open' class when the page loads

        arrow.addEventListener('click', (e) => {
            const isActive = acordeon.classList.contains('open');

            if (isActive) {
                acordeon.classList.remove('open');
            } else {
                acordeon.classList.add('open');
            }
        });
    });
});
