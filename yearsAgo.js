module.exports = function (year) {
    
    var currentDate = new Date
    var currentYear = currentDate.getFullYear()
 
    return currentYear - year;
}