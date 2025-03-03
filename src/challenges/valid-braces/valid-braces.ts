import renderChallenge from "../../utils/utils";

// Challenge description
const challenge = {
  title: "Valid Braces",
  description: [
    "Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return <code>true</code> if the string is valid, and <code>false</code> if it's invalid.",
    "All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: <code>()[]{}.</code>",
    "A string of braces is considered valid if all braces are matched with the correct brace.",
  ],
  tags: ["Strings", "Validation", "Braces"],
  testCases: {
    "())(": false,
    "()": true,
    ")()": false,
    "(": false,
    "(())()": true,
    "((())()(": false,
    "[]": true,
    "{}": true,
    "(){}[]": true,
    "([{}])": true,
    "(}": false,
    "[(])": false,
    "({})[({})]": true,
    "(})": false,
    "(({{[[]]}}))": true,
    "{}({})[]": true,
    ")(}{][": false,
    "())({}}{()][][": false,
    "(((({{": false,
    "}}]]))}])": false,
  },
};

// Solution
function solution(str: string): boolean {
  // the idea is to use a stack to keep track of the open braces
  // if we find a closing brace, we pop the last element from the stack
  // if the last element is the corresponding open brace, we pop it
  // otherwise, we push the closing brace to the stack
  // if the stack is empty at the end, then the string is
  // valid, otherwise it's invalid
  const stack = [];

  for (let char of str) {
    switch (char) {
      case "(":
      case "{":
      case "[":
        stack.push(char);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
    }
  }

  return stack.length === 0;
}

// Render the challenge 🚀
renderChallenge(challenge, solution);
