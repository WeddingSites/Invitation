document.addEventListener("DOMContentLoaded", function () {
    const saveDateButton = document.getElementById("saveDateButton");
  
    // Event details
    const eventName = " Yogananthan & Sharmi's Wedding Ceremony";
    const eventLocation = "XXH7+X85, Sri Ram Nagar, Sriperumbudur, Tamil Nadu 602105";
    const eventStartDate = "20241116"; // YYYYMMDD format
    const eventStartTime = "180000"; // HHmmss format in 24-hour clock
    const eventEndDate = "20241117"; // YYYYMMDD format
    const eventEndTime = "220000"; // HHmmss format in 24-hour clock
  
    // Create Google Calendar link
    const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${encodeURIComponent(eventStartDate + "T" + eventStartTime + "/" + eventEndDate + "T" + eventEndTime)}&location=${encodeURIComponent(eventLocation)}`;
  
    // Handle button click
    saveDateButton.addEventListener("click", function () {
      window.open(googleCalendarLink, "_blank");
    });
  });

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
  
  document.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });