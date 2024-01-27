
/* timer start*/
function updateCountdown() {
  const weddingDate = new Date("2024-02-11T07:30:00").getTime();
 
  const now = new Date().getTime();
  const timeDifference = weddingDate - now;
  

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  
  if(timeDifference <= 0){
   
    //document.getElementById("countdown").style.display = "none";
    document.getElementById("countdown").textContent = "Happy married life";
    document.getElementById("countdown").style.fontFamily = "Style script";
    document.getElementById("countdown").style.fontSize = "30px";
    document.getElementById("countdown").style.color = "red";
    
    clearInterval(countdownInterval);
  }
}

// Initial update
updateCountdown();

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

/* timer end*/




document.addEventListener("DOMContentLoaded", function () {
  const saveDateButton = document.getElementById("saveDateButton");

  // Event details
  const eventName = "The Wedding of S.Chengalappan & A.Aswini";
  const eventLocation = "Saravanan Marriage Hall,Thiruvottriyur";
  const eventStartDate = "20240211"; // YYYYMMDD format
  const eventStartTime = "073000"; // HHmmss format in 24-hour clock
  const eventEndDate = "20240211"; // YYYYMMDD format
  const eventEndTime = "150000"; // HHmmss format in 24-hour clock

  // Create Google Calendar link
  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${encodeURIComponent(eventStartDate + "T" + eventStartTime + "/" + eventEndDate + "T" + eventEndTime)}&location=${encodeURIComponent(eventLocation)}`;

  // Handle button click
  saveDateButton.addEventListener("click", function () {
    window.open(googleCalendarLink, "_blank");
  });
});


/* save date end*/ 

