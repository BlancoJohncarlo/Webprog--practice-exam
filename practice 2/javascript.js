document.getElementById("evaluateButton").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const grades = {
      math: Number(document.getElementById("math").value),
      science: Number(document.getElementById("science").value),
      english: Number(document.getElementById("english").value),
      filipino: Number(document.getElementById("filipino").value),
      pe: Number(document.getElementById("pe").value),
    };
  
    // Validation
    if (!name || Object.values(grades).some(grade => isNaN(grade) || grade < 0 || grade > 100)) {
      alert("Please enter valid grades between 0 and 100 for all fields.");
      return;
    }
  
    const evaluations = [];
    let excellentCount = 0;
    let poorFailCount = 0;
  
    // Evaluate grades
    for (const [subject, grade] of Object.entries(grades)) {
      let evaluation = "";
      if (grade >= 90) {
        evaluation = "Excellent";
        excellentCount++;
      } else if (grade >= 80) {
        evaluation = "Good";
      } else if (grade >= 70) {
        evaluation = "Average";
      } else if (grade >= 60) {
        evaluation = "Poor";
        poorFailCount++;
      } else {
        evaluation = "Fail";
        poorFailCount++;
      }
      evaluations.push(`${subject}: ${grade} - ${evaluation}`);
    }
  
    // Determine ranking
    let ranking = "";
    if (excellentCount === 5) {
      ranking = "Top Honor Student";
    } else if (excellentCount >= 3) {
      ranking = "Second Honorable Student";
    } else if (poorFailCount === 5) {
      ranking = "Repeater";
    } else {
      ranking = "Average Performer";
    }
  
    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h2>Results for ${name}</h2>
      <ul>
        ${evaluations.map(eval => `<li>${eval}</li>`).join("")}
      </ul>
      <p><strong>Ranking:</strong> ${ranking}</p>
    `;
  });
  