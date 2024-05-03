function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsPerKm = 5;

  if (speed <= speedLimit + pointsPerKm) {
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

console.log(checkSpeed(130));
