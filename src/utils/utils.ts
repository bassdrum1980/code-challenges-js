import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { Challenge } from "../types/types";

// code syntax highlighting
hljs.registerLanguage("javascript", javascript);

function renderChallenge(
  challenge: Challenge,
  solution: Function,
  mapInput?: (key: string) => void,
  compareResult?: (a: any, b: any) => boolean
) {
  window.addEventListener("DOMContentLoaded", () => {
    const descriptionElem = document.querySelector(
      ".challenge__description"
    ) as HTMLElement;
    const solutionElem = document.querySelector(
      ".challenge__solution__code > pre"
    ) as HTMLElement;
    const outputElem = document.querySelector(
      ".challenge__solution__output"
    ) as HTMLElement;

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
      // in some cases we need to manipulate the key before passing it to the solution function
      const result = mapInput ? mapInput(key) : solution(key);
      const li = document.createElement("li");
      li.textContent = `${key} => ${result}`;

      console.log("result - ", result);
      console.log("challenge - ", challenge.testCases[key]);

      if (
        // and sometimes we need a custom comparison function
        compareResult
          ? compareResult(result, challenge.testCases[key])
          : result === challenge.testCases[key]
      ) {
        li.classList.add("--correct");
        li.insertAdjacentHTML("afterbegin", '<span class="icon">✅</span>');
      } else {
        li.classList.add("--incorrect");
        li.insertAdjacentHTML("afterbegin", '<span class="icon">❌</span>');
        li.insertAdjacentText(
          "beforeend",
          ` Expected: ${challenge.testCases[key]}`
        );
      }
      outputElem.appendChild(li);
    });
  });
}

export default renderChallenge;
