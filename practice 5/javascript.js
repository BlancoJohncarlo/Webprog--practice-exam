document.getElementById("generateBtn").addEventListener("click", () => {
    const numTerms = parseInt(document.getElementById("numTerms").value);
    const outputDiv = document.getElementById("output");
    
    // Clear previous output
    outputDiv.innerHTML = "";
  
    // Validate input
    if (isNaN(numTerms) || numTerms < 1) {
      outputDiv.textContent = "Please enter a valid number greater than 0.";
      return;
    }
  
    // Generate Fibonacci sequence
    const fibonacci = [];
    for (let i = 0; i < numTerms; i++) {
      if (i === 0) {
        fibonacci.push(0);
      } else if (i === 1) {
        fibonacci.push(1);
      } else {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
      }
    }
  
    // Display the sequence
    outputDiv.textContent = `Fibonacci Sequence (${numTerms} terms): ${fibonacci.join(", ")}`;
  });
  