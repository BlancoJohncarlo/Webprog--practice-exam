document.getElementById("generateBtn").addEventListener("click", () => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    for (let i = 1; i <= 100; i++) {
      let output = "";

      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";

      // Create a paragraph element for each number
      const para = document.createElement("p");
      if (output === "") {
        para.textContent = i;
      } else {
        para.textContent = output;
        // Add classes for styling
        if (output === "Fizz") para.classList.add("fizz");
        if (output === "Buzz") para.classList.add("buzz");
        if (output === "FizzBuzz") para.classList.add("fizzbuzz");
      }

      // Append to the output div
      outputDiv.appendChild(para);
    }
  });