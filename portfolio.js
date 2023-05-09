console.log("Test fichier js ok");

const pictures = document.querySelectorAll(".project-picture");
const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) =>
    entry.target.classList.toggle(
      "project-picture-animation",
      entry.isIntersecting
    )
  );
});

pictures.forEach((picture) => observer.observe(picture));

//const sections = document.querySelectorAll("project-picture");
//const observer = new IntersectionObserver((entries) => {
//  entries.forEach((entry) => {
//    entry.isIntersecting
//      ? (entry.target.classList.add = "project-picture-animation")
//      : "";
//  });
//});
//
//sections.forEach((section) => {
//  observer.observe(section);
//});
