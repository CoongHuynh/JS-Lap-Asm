"use strict";
const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),
  registerNewAnswer() {
    let ans = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    while (isNaN(ans) || ans < 0 || ans > 3) {
      alert(
        "Câu trả lời không hợp lệ!! Vui lòng nhập giá trị trong khoảng (0,3)"
      );
      ans = Number(
        prompt(
          `${this.question}\n${this.options.join("\n")}\n(Write option number)`
        )
      );
    }
    //tăng số lần lựa chọn ở mảng lên 1
    this.numberOfVotes[ans]++;
  },
  displayResults(type = "array") {
    if (type === "string") {
      console.log(`Poll Resuls are ${this.numberOfVotes.join(", ")}`);
    } else if (type === "array") {
      console.log(this.numberOfVotes);
    }
  },
};

console.log(typeof poll.numberOfVotes);

document.querySelector(".poll").addEventListener("click", function () {
  poll.registerNewAnswer.call(poll);
  poll.displayResults.call(poll);
});

const ans1 = {
  numberOfVotes: [5, 2, 3],
};
const ans2 = {
  numberOfVotes: [1, 5, 2, 9, 6, 1],
};

poll.displayResults.call(ans1);
poll.displayResults.call(ans1, "string");
poll.displayResults.call(ans2);
poll.displayResults.call(ans2, "string");
