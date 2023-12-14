const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)

}
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);



const driver = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnLastTwoDrivers = function(driver) {
    return driver.slice(-2)

}
const lastTwoDrivers = returnLastTwoDrivers(driver);
console.log(lastTwoDrivers)

const createFareMultiplier = function(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
     
}

const fareDoubler = function(doubler = * 2) {
    return function (fare) {
        return fare * doubler;
    }
}