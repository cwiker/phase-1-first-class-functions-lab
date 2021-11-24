const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
  
    function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = function(fare) {
    return fare * 2;
}

const fareTripler = function(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, input) {
    if (input === returnFirstTwoDrivers) {
    return drivers.slice(0, 2);
}   else if (input === returnLastTwoDrivers) {
    return drivers.slice(2, 4);
}
}
