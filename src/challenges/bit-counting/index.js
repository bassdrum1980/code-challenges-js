import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// code syntax highlighting
hljs.registerLanguage("javascript", javascript);

window.addEventListener("DOMContentLoaded", () => {
  const outputElem = document.getElementById("output");
  const testCasesElem = document.getElementById("test-cases");

  // print test cases
  testCasesElem.innerHTML = `
    <ul>
      ${Object.keys(testCases)
        .map((key) => `<li>Input: ${key} => Output: ${testCases[key]}</li>`)
        .join("")}
    </ul>
  `;

  // print function
  const functionElem = document.getElementById("solution");
  functionElem.textContent = countBits.toString();
  hljs.highlightElement(functionElem);

  // run test cases
  Object.keys(testCases).forEach((key) => {
    const result = countBits(Number(key));
    const li = document.createElement("li");
    li.textContent = `Input: ${key} => Output: ${result}`;
    if (result === testCases[key]) {
      li.style.color = "green";
    } else {
      li.style.color = "red";
    }
    outputElem.appendChild(li);
  });
});

function countBits(n) {
  return n.toString(2).split("0").join("").length;
}

const testCases = {
  1234: 5,
  4: 1,
  10: 2,
};
