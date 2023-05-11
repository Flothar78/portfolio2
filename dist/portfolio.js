"use strict";
const pictures = document.querySelectorAll(".project-picture");
const observer = new IntersectionObserver((entries) => {
    entries.map((entry) => {
        entry.target.classList.toggle("project-picture-animation", entry.isIntersecting);
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0 });
pictures.forEach((picture) => {
    observer.observe(picture);
});
