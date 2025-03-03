import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// TODO: migrate to typescript
// code syntax highlighting
hljs.registerLanguage("javascript", javascript);

function renderChallenge(challenge, solution, callback) {
  window.addEventListener("DOMContentLoaded", () => {
    const descriptionElem = document.querySelector(".challenge__description");
    const solutionElem = document.querySelector(
      ".challenge__solution__code > pre"
    );
    const outputElem = document.querySelector(".challenge__solution__output");

    // print description
    const title = `<h1>${challenge.title}</h1>`;
    const description = challenge.description
      .map((p) => `<p>${p}</p>`)
      .join("");
    descriptionElem.innerHTML = `${title}${description}`;

    // print function
    solutionElem.textContent = solution.toString();
    hljs.highlightElement(solutionElem);

    // run test cases and print the output
    Object.keys(challenge.testCases).forEach((key) => {
      const result = callback(key);
      const li = document.createElement("li");
      li.textContent = `${key} => ${result}`;
      if (result === challenge.testCases[key]) {
        li.classList.add = "correct";
        li.insertAdjacentHTML("afterbegin", '<span class="icon">✅</span>');
      } else {
        li.classList.add = "incorrect";
        li.insertAdjacentHTML("afterbegin", '<span class="icon">❌</span>');
      }
      outputElem.appendChild(li);
    });
  });
}

export default renderChallenge;
