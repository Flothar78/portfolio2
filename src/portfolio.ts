const pictures = document.querySelectorAll(".project-picture");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) =>
      entry.target.classList.toggle(
        "project-picture-animation",
        entry.isIntersecting
      )
    );
  },
  { threshold: 0 }
);
pictures.forEach((picture) => {
  observer.observe(picture);
});
