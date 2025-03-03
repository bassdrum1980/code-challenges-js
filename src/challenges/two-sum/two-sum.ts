import renderChallenge from "../../utils/utils";

// Challenge description
const challenge = {
  title: "Two Sum",
  description: [
    "Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: <code>(index1, index2)</code>.",
    "The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).",
    "Some tests may have multiple answers; any valid solutions will be accepted.",
  ],
  tags: ["Fundamentals", "Arrays", "Numbers", "Search"],
  testCases: {
    '{"numbers": [1, 2, 3], "target": 4}': [0, 2],
    '{"numbers": [1234, 5678, 9012], "target": 14690}': [1, 2],
    '{"numbers": [2, 2, 3], "target": 4}': [0, 1],
    '{"numbers": [3, 2, 4], "target": 6}': [1, 2],
  },
};

// Solution
function solution(numbers: number[], target: number): number[] {
  // O(n) - find the difference between the target and each number
  // and check if the difference exists in the array
  // repeat for every number in the array
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    const j = numbers.indexOf(diff);
    if (j !== -1 && j !== i) {
      return [i, j];
    }
  }

  return [];
}

// Render the challenge 🚀
renderChallenge(challenge, solution, mapInput, compareResult);

function mapInput(key: string) {
  const { numbers, target } = JSON.parse(key);
  return solution(numbers, target);
}

function compareResult(result: number[], testCase: number[]): boolean {
  // sort result and test case arrays before comparing
  // since we might have multiple correct answers [0, 2] and [2, 0]
  return (
    JSON.stringify(result.sort((a, b) => a - b)) ===
    JSON.stringify(testCase.sort((a, b) => a - b))
  );
}
