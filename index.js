// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
    if (destination >= 42) {
        return destination - 42;
    }
    if (destination < 42) {
        return 42 - destination;
    }
}
function distanceFromHqInFeet(destination){
    let blockNumber = distanceFromHqInBlocks(destination);
    return blockNumber * 264;
}

function distanceTravelledInFeet(start, endpoint){
       if (endpoint >= start){
        let blocksTravelled = endpoint - start;
        return blocksTravelled * 264;
    }
    if (endpoint < start){
        let blocksTravelled = start - endpoint;
        return blocksTravelled * 264
    }
}

function calculatesFarePrice(start, endpoint){
    let distance = distanceTravelledInFeet(start, endpoint);
    if (distance <= 400){
        return 0;
    }
    if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    if (distance > 2000 && distance <= 2500){
        return 25;
    }
    if (distance > 2500){
        return "cannot travel that far"
    }


}