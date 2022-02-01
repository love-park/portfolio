// Greeting #timeMessenger
var time = today.getHours();
var timeMessage;
if (time >= 0 && time <= 3)
    timeMessage = "Hello, Night Owl!";
elseif (time > 3 && time <= 6)
    timeMessage = "Good Morning, Early Bird!";
elseif (time > 6 && time < 12)
    timeMessage = "Good Morning!";
elseif (time = 12)
    timeMessage = "Happy Lunch!";
elseif (time > 12 && time < 18)
    timeMessage = "Good Afternoon!";
elseif (time >=18 && time <=21)
    timeMessage = "Good Evening!";
elseif (time > 21 && time < 24)
    timeMessage = "Good Night!";
document.getElementById('timeMessenger').innerHTML = timeMessage;
