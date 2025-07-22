const navbar = document.getElementById('navbar');
const profileSection = document.getElementById('profile');

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            navbar.classList.add('transparent');
        }
        else {
            navbar.classList.remove('transparent');
        }
    },
    {
        threshold: 0.4, // Adjust this value to control when the navbar becomes transparent
    },
)

observer.observe(profileSection);