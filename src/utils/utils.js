import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// TODO: migrate to typescript
// code syntax highlighting
hljs.registerLanguage("javascript", javascript);

function renderChallenge(challenge, solution, callback) {
  window.addEventListener("DOMContentLoaded", () => {
    const descriptionElem = document.querySelector(".challenge__description");
    const testCasesElem = document.querySelector(".challenge__test-cases");
    const solutionElem = document.querySelector(".challenge__solution > pre");
    const outputElem = document.querySelector(".challenge__output");

    // print description
    const title = `<h1>${challenge.title}</h1>`;
    const description = challenge.description
      .map((p) => `<p>${p}</p>`)
      .join("");
    descriptionElem.innerHTML = `${title}${description}`;

    // print test cases
    testCasesElem.innerHTML += `
      <ul>
        ${Object.keys(challenge.testCases)
          .map(
            (key) =>
              `<li>Input: ${key} => Output: ${challenge.testCases[key]}</li>`
          )
          .join("")}
      </ul>
    `;

    // print function
    solutionElem.textContent = solution.toString();
    hljs.highlightElement(solutionElem);

    // run test cases and print the output
    Object.keys(challenge.testCases).forEach((key) => {
      const result = callback(key);
      const li = document.createElement("li");
      li.textContent = `Input: ${key} => Output: ${result}`;
      if (result === challenge.testCases[key]) {
        li.style.color = "lime";
      } else {
        li.style.color = "red";
      }
      li.insertAdjacentHTML("afterbegin", '<span class="icon">✅</span>');
      outputElem.appendChild(li);
    });
  });
}

export default renderChallenge;
