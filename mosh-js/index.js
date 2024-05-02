function checkSpeed(speed) {
  const speedLimit = 70;
  let pointsPerKm = 5;

  if (speed <= speedLimit) {
    return "ok";
  } else {
    const points = Math.floor((speed - speedLimit) / pointsPerKm);

    if (points >= 12) {
      return "liscne suspended";
    } else {
      return points + " points";
    }
  }
}

console.log(checkSpeed(120));
