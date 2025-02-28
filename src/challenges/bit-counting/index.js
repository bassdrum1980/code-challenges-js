import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

const challenge = {
  title: "Bit Counting",
  description: [
    "Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.",
    " Example: The binary representation of <code>1234</code> is <code>10011010010</code>, so the function should return <code>5</code> in this case",
  ],
  testCases: {
    1234: 5,
    4: 1,
    10: 2,
  },
};

// code syntax highlighting
hljs.registerLanguage("javascript", javascript);

window.addEventListener("DOMContentLoaded", () => {
  const descriptionElem = document.querySelector(".challenge__description");
  const testCasesElem = document.querySelector(".challenge__test-cases");
  const solutionElem = document.querySelector(".challenge__solution > pre");
  const outputElem = document.querySelector(".challenge__output");

  // print description
  const title = `<h1>${challenge.title}</h1>`;
  const description = challenge.description.map((p) => `<p>${p}</p>`).join("");
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
  solutionElem.textContent = countBits.toString();
  hljs.highlightElement(solutionElem);

  // run test cases
  Object.keys(challenge.testCases).forEach((key) => {
    const result = countBits(Number(key));
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

function countBits(n) {
  return n.toString(2).split("0").join("").length;
}
