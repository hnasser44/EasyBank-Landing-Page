tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Primary Colors
                'dark-blue': 'hsl(233, 26%, 24%)',
                'lime-green': 'hsl(136, 65%, 51%)',
                'bright-cyan': 'hsl(192, 70%, 51%)',
                // Neutral Colors
                'grayish-blue': 'hsl(233, 8%, 62%)',
                'light-grayish-blue': 'hsl(220, 16%, 96%)',
                'very-light-gray': 'hsl(0, 0%, 98%)',
                'white': 'hsl(0, 0%, 100%)',
              },
        }
    }
}

const OpenMenuIcon = document.querySelector('.open-menu-icon');
const CloseMenuIcon = document.querySelector('.close-menu-icon');
const MobileMenu = document.querySelector('.mobile-menu');

OpenMenuIcon.addEventListener('click', () => {
    MobileMenu.classList.add('opacity-100')
    MobileMenu.classList.remove('opacity-0')
    OpenMenuIcon.classList.add('hidden')
    CloseMenuIcon.classList.remove('hidden')
})

CloseMenuIcon.addEventListener('click', () => {
    MobileMenu.classList.add('opacity-0')
    MobileMenu.classList.remove('opacity-100')
    OpenMenuIcon.classList.remove('hidden')
    CloseMenuIcon.classList.add('hidden')
})