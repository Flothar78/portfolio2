"use strict";
const pictures = document.querySelectorAll(".project-picture");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("project-picture-animation", entry.isIntersecting);
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
        }
    });
}
// { rootMargin: "-250px" }
);
pictures.forEach((picture) => {
    observer.observe(picture);
});
const projectTitle = document.querySelectorAll(".project-figcaption");
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("project-figcaption-animation", entry.isIntersecting);
        if (entry.isIntersecting) {
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 1 });
projectTitle.forEach((element) => titleObserver.observe(element));
const personalFrame = document.querySelector(".personal-frame");
const personalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("personal-frame-fade-out");
            entry.target.classList.add("personal-frame-fade-in");
        }
        else {
            entry.target.classList.remove("personal-frame-fade-in");
            entry.target.classList.add("personal-frame-fade-out");
        }
    });
}, { threshold: 0.9 });
personalObserver.observe(personalFrame);
//# sourceMappingURL=portfolio.js.map