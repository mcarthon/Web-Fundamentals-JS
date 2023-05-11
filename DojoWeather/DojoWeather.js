function removeCookies(element) {
    element.parentElement.parentElement.remove();
}

function cityAlert() {
    alert("Loading weather report...");
}

function tempConversion() {

    if (document.querySelector("#dropdown").value === "F") {

        for (let i = 0; i < document.querySelectorAll(".hi").length; ++i) {

            document.querySelectorAll(".lo")[i].innerText = JSON.stringify(Math.round(parseInt(document.querySelectorAll(".lo")[i].innerText) * (9 / 5) + 32));
            document.querySelectorAll(".hi")[i].innerText = JSON.stringify(Math.round(parseInt(document.querySelectorAll(".hi")[i].innerText) * (9 / 5) + 32));

        }

    }

    else {

        for (let i = 0; i < document.querySelectorAll(".hi").length; ++i) {

            document.querySelectorAll(".lo")[i].innerText = JSON.stringify(Math.round((parseInt(document.querySelectorAll(".lo")[i].innerText) - 32) * (5 / 9)));
            document.querySelectorAll(".hi")[i].innerText = JSON.stringify(Math.round((parseInt(document.querySelectorAll(".hi")[i].innerText) - 32) * (5 / 9)));
        }
    }

}