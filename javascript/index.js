//  Functions .............
function getInputValueNumber(id){
    const inputField = parseInt(document.getElementById(id).value);
    return inputField;
}

function getInputValue(id){
    const inputField = document.getElementById(id).value;
    return inputField;
}

function getInnerText(id){
    const element = parseInt(document.getElementById(id).innerText);
    return element;
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

//  Variables ..........
let heartCount = getInnerText("heartCount"); 
let coinCount = getInnerText("coinCount");
let copyCount = getInnerText("copyCount");

// Heart Button ........
document.querySelectorAll(".heartBtn").forEach(function(btn){
    btn.addEventListener("click", function(e){
        e.preventDefault();
        heartCount++;
        setInnerText("heartCount", heartCount);
    });
});


// Copy Button ..........
document.querySelectorAll(".copyBtn").forEach(function(btn){
    btn.addEventListener("click", function(e){
        e.preventDefault();
        copyCount++;
        setInnerText("copyCount", copyCount);
        alert("Number Copied!");
    });
});

//  Call Button ...........
document.querySelectorAll(".callBtn").forEach(function(btn){
    btn.addEventListener("click", function(e){
        e.preventDefault();

        if(coinCount < 20){
            alert("Insufficient coins! You need 20 coins to make a call.");
            return;
        }

        // call service name and number..........
        const card = btn.closest(".bg-white");
        const serviceName = card.querySelector("h3").innerText;
        const serviceNumber = card.querySelector("p.font-bold").innerText;

        // Alert name + number.........
        const confirmCall = confirm("Do you want to call " + serviceName + " (" + serviceNumber + ")?");

        if(confirmCall){
            coinCount -= 20;
            setInnerText("coinCount", coinCount);

            const now = new Date().toLocaleTimeString();
            const li = document.createElement("li");
            li.className = "bg-gray-100 p-3 rounded-xl shadow-sm hover:shadow-md transition";
            li.textContent = "Call to " + serviceName + " (" + serviceNumber + ") at " + now;
            document.getElementById("historyList").appendChild(li);
        } else {
            alert("Call cancelled");
        }
    });
});


// Clear History Button ............
document.getElementById("clearHistory").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("historyList").innerHTML = "";
});
