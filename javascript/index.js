// console.log("imran nazir")
let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    const heartCountEl = document.getElementById("heartCount");
    const coinCountEl = document.getElementById("coinCount");
    const copyCountEl = document.getElementById("copyCount");
    const historyList = document.getElementById("historyList");

    // Heart button
    document.querySelectorAll(".heartBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        heartCount++;
        heartCountEl.textContent = heartCount;
      });
    });

    // Copy button
    document.querySelectorAll(".copyBtn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const number = e.target.closest("div").previousElementSibling.textContent;
        navigator.clipboard.writeText(number);
        copyCount++;
        copyCountEl.textContent = copyCount;
        alert(`Hotline ${number} copied! Total Copies: ${copyCount}`);
      });
    });

    // Call button
    document.querySelectorAll(".callBtn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".bg-white");
        const serviceName = card.querySelector("h3").textContent;
        const serviceNumber = card.querySelector("p.font-bold").textContent;

        if (coinCount < 20) {
          alert("Not enough coins to make a call!");
          return;
        }

        coinCount -= 20;
        coinCountEl.textContent = coinCount;

        const now = new Date().toLocaleTimeString();
        alert(`Calling ${serviceName} (${serviceNumber})`);
        const li = document.createElement("li");
        li.textContent = `${serviceName} - ${serviceNumber} (at ${now})`;
        historyList.appendChild(li);
      });
    });

    // Clear history
    document.getElementById("clearHistory").addEventListener("click", () => {
      historyList.innerHTML = "";
    });