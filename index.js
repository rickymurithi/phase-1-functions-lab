//Returns the number of blocks.
function distanceFromHqInBlocks(blocks) {
  let blockDistance = Math.abs(blocks - 42);
  return blockDistance;
}

//Returns the number of feet.
function distanceFromHqInFeet(blocks) {
    distanceFromHqInBlocks(blocks);
    return (distanceFromHqInBlocks(blocks)*264);
}

//returns the number of feet travelled.
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start)*264;
}
//returns the fare for the customer.
function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    let totalDistance = distanceTravelledInFeet(start, destination);
    if (totalDistance < 400) {
        return 0;
    }
    if (totalDistance > 2500) {
        return 'cannot travel that far';
    }
    else if (totalDistance < 2000) {
        return (totalDistance - 400) * 0.02;
    }
    else {
        return 25;
    }

}

