document.addEventListener("DOMContentLoaded", function () {
  // Specify your target date in the format: "Month Day, Year HH:mm:ss"
  var targetDate = new Date("June 22, 2024 16:45:00").getTime();

  var countdownElement = document.getElementById("countdown");

  // Update the countdown every second
  var countdownInterval = setInterval(function () {
    var currentDate = new Date().getTime();
    var timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    } else {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "Already arrived";
    }
  }, 1000);
});
