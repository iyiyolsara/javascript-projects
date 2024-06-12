// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName); // string
console.log(typeof shuttleSpeedMph); // number
console.log(typeof distanceToMarsKm); // number
console.log(typeof distanceToMoonKm); // number
console.log(typeof milesPerKm); // number

// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below.
console.log(shuttleName + " will take " + daysToMars.toFixed(2) + " days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon.toFixed(2) + " days to reach the Moon.");
