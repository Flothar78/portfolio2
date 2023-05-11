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
      !entry.isIntersecting
        ? entry.target.classList.add("personal-frame-animation")
        : "";
    });
  },
  { threshold: 0.5 }
);
personalObserver.observe(personalFrame);
