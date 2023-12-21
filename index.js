let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)

}

let firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);


let driver = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let returnLastTwoDrivers = function(driver) {
    return driver.slice(-2)

}

let lastTwoDrivers = returnLastTwoDrivers(driver);
console.log(lastTwoDrivers)

let createFareMultiplier = function(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
     
}

function fareDoubler(num) {
    let fare = num * 2;
    return fare
}

function fareTripler(num) {
    let fare = num *3;
    return fare;
}

let driverSelection = [returnFirstTwoDrivers, returnLastTwoDrivers]
let selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];