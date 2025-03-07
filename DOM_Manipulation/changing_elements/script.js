let innerHTMLExample = document.getElementById("para1");
innerHTMLExample.innerText = "hello dom i'm from js file";

let mainDiv = document.getElementById("main_div");
// createElement()
let h3 = document.createElement("h2");
h3.innerText = "hello heading 3 i'm from js file";
// appendChild()
mainDiv.append(h3);
// mainDiv.appendChild(h3);

// setAttribute() and getAttribute()
h3.setAttribute("class", "heading");
h3.setAttribute("id", "heading2");
// h3.getAttribute("id");

console.log(h3.getAttribute("class"));
h3.removeAttribute("id");
console.log(h3);

function removeElement() {
  let removeELe = document.getElementById("remove");
  removeELe.remove();
}