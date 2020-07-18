// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = (drivers) => {
    return [drivers[drivers.length -2], drivers[drivers.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return (fare) => {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func){
    return func(arr)
}