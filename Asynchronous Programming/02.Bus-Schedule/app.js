function solve() {
    let baseURL = "http://localhost:3030/jsonstore/bus/schedule/";
    let infoBox = document.getElementsByClassName("info")[0];
    let departButton = document.getElementById("depart");
    let arriveButton = document.getElementById("arrive");

    let nextStopId = "depot";
    let nextStopName = "Depot";

    async function depart() {
        try{
            let response = await fetch(baseURL + nextStopId);
            let stopInfo = await response.json();

            infoBox.textContent = `Next stop ${stopInfo.name}`;
            departButton.disabled = true;
            arriveButton.disabled = false;

            nextStopId = stopInfo.next;
            nextStopName = stopInfo.name;

        }
        catch{
            departButton.disabled = true;
            infoBox.textContent = "Error";
        }
    }

    async function arrive() {
        infoBox.textContent = `Arriving at ${nextStopName}`;
        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();