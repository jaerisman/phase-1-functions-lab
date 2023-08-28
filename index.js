function distanceFromHqInBlocks(dropOffLocation) {
    if(dropOffLocation > 42){
        return (dropOffLocation - 42);
    }
    else if(dropOffLocation <= 42){
        return (42 - dropOffLocation)
    }
  }
function distanceFromHqInFeet(dropOffLocation) {
    if(dropOffLocation > 42){
        return ((dropOffLocation - 42) * 264);
    }
    else if(dropOffLocation <= 42){
        return ((42 - dropOffLocation) * 264);
    }
  }
function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return ((start - destination) * 264);
    }
    else if (start < destination){
        return ((destination - start) * 264);
    }
    return 0
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination)<=400){
        return (0);
    }
    else if (distanceTravelledInFeet(start, destination)<=2000){
        return ((distanceTravelledInFeet(start, destination)-400) * .02);
    }
    else if (distanceTravelledInFeet(start, destination)<=2500){
        return (25);
    }
    else if (distanceTravelledInFeet(start, destination)>2500){
        return ('cannot travel that far');
    }
  }