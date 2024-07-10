// Function to print the current time in the desired format
function printCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours}時${minutes}分`;
  console.log(formattedTime);
}

// Print the current time immediately
printCurrentTime();

// Set an interval to print the time every minute
setInterval(printCurrentTime, 60000);
