import renderChallenge from "../../utils/utils";

// Challenge description
const challenge = {
  title: "Bit Counting",
  description: [
    "Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.",
    " Example: The binary representation of <code>1234</code> is <code>10011010010</code>, so the function should return <code>5</code> in this case",
  ],
  tags: ["Fundamentals", "Binary", "Bitwise"],
  testCases: {
    1234: 5,
    4: 1,
    10: 2,
  },
};

// Solution
function countBits(n: number): number {
  return n.toString(2).split("0").join("").length;
}

// Render the challenge 🚀
renderChallenge(challenge, countBits, (key) => countBits(Number(key)));
