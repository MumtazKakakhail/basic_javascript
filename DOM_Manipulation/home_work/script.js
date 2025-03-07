let webdevelopmentData = [
  { name: "wafi", isGraduate: true },
  { name: "zain", isGraduate: true },
  { name: "Shan", isGraduate: false },
  { name: "saliha", isGraduate: true },
  { name: "Daniyal", isGraduate: false },
];
let GraduateStd = document.getElementById("stdData");

let filteredGraduate = webdevelopmentData
  .filter((stds) => {
    return stds.isGraduate === true;
  })
  .map((grdstd) => {
    return `<li>${grdstd.name}</li>`;
  })
  .join("");

console.log(filteredGraduate);

GraduateStd.innerHTML = filteredGraduate;
