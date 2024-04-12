const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
};

console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const result1 = fareDoubler(10)
const result2 = fareTripler(12)

function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    
    return driverSelector(arrayOfDrivers);
    
}
console.log(selectDifferentDrivers(drivers, selectingDrivers[0])); 
console.log(selectDifferentDrivers(drivers, selectingDrivers[1])); 

