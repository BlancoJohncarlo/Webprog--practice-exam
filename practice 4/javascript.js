document.getElementById("generateBtn").addEventListener("click", () => {
    const lyricsDiv = document.getElementById("lyrics");
    lyricsDiv.innerHTML = ""; // Clear previous lyrics

    // Generate the lyrics
    for (let i = 99; i >= 0; i--) {
      let line1, line2;

      if (i > 0) {
        const nextBottle = i - 1;
        line1 = `${i} bottle${i > 1 ? "s" : ""} of beer on the wall, ${i} bottle${i > 1 ? "s" : ""} of beer.`;
        line2 = `Take one down and pass it around, ${nextBottle > 0 ? nextBottle : "no more"} bottle${nextBottle === 1 ? "" : "s"} of beer on the wall.`;
      } else {
        line1 = `No more bottles of beer on the wall, no more bottles of beer.`;
        line2 = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
      }

      // Append the lyrics
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      p1.textContent = line1;
      p2.textContent = line2;
      lyricsDiv.appendChild(p1);
      lyricsDiv.appendChild(p2);
    }
  });