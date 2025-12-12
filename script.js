
let succulentInfo = "Succulents need bright light and very little water.";
let snakeInfo = "Snake plants survive low light and need watering every 2–3 weeks.";
let pothosInfo = "Pothos thrive in medium light and like weekly watering.";

function getPlantInfo(plant) {
  if (plant === "succulent") {
    return succulentInfo;
  } else if (plant === "snake") {
    return snakeInfo;
  } else if (plant === "pothos") {
    return pothosInfo;
  } else {
    return "Please choose a plant.";
  }
}

document.getElementById("infoBtn").addEventListener("click", function () {
  let plant = document.getElementById("plantSelect").value;

  document.getElementById("plantInfo").textContent = getPlantInfo(plant);
});

document.getElementById("calcBtn").addEventListener("click", function () {
  let humidity = parseInt(document.getElementById("humidityInput").value);
  let result = document.getElementById("waterResult");

  if (isNaN(humidity) || humidity < 0 || humidity > 100) {
    result.textContent = "Enter a valid number between 0 and 100.";
    return;
  }

  let days = 7 - (humidity / 20) + Math.random();
  result.textContent = "Water every " + days.toFixed(1) + " days.";
});
