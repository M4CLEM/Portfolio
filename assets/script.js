const navbar = document.getElementById('navbar');
const profileSection =  document.getElementById('profile');

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
        threshold: 0.4, // Adjust threshold as needed for navbar transparect according to the part of a section's visibility
    }
);

observer.observe(profileSection);