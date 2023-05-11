const pictures = document.querySelectorAll(".project-picture");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "project-picture-animation",
        entry.isIntersecting
      );
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0 }
);
pictures.forEach((picture) => {
  observer.observe(picture);
});

const personalFrame = document.querySelector(".personal-frame")!;
const personalObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.add("personal-frame-fade-out");
      } else {
        entry.target.classList.remove("personal-frame-fade-out");
       // entry.target.classList.add("personal-frame-fade-in");
      }
    });
  },
  { threshold: 0.95 }
);
personalObserver.observe(personalFrame);
