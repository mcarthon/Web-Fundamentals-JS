console.log("page loaded...");
console.log(`Current connection requests: ${document.querySelector("#badge0").innerText}`);
console.log(`Current connections: ${document.querySelector("#badge1").innerText}`);
console.log(`Current Profile Name: ${typeof document.querySelector(".ladyName").innerText}`);

var currentRequests = document.querySelector("#badge0");
var numRequests = parseInt(currentRequests.innerText);
var currentConnections = document.querySelector("#badge1");
var numConnections = parseInt(currentConnections.innerText);
var profileName = document.querySelector(".ladyName");
console.log(`The data type for numRequets is: ${typeof numRequests}`);

function editName() {
    if (profileName.innerText === "Jane Doe") {
        profileName.innerText = "Rane Poe";
    }
    else {
        profileName.innerText = "Jane Doe";
    }
    
}

function rejectRequest(element) {
    currentRequests.innerText = JSON.stringify(parseInt(currentRequests.innerText) - 1);
    element.parentElement.parentElement.remove();
}

function acceptRequest(element) {
    currentRequests.innerText = JSON.stringify(parseInt(currentRequests.innerText) - 1);
    currentConnections.innerText = JSON.stringify(parseInt(currentConnections.innerText) + 1);
    element.parentElement.parentElement.remove();
}