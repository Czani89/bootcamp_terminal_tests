module.exports = function (regN) {
    let regNumber = regN.split(",");
    let regNumCounter = 0;

    for (let i = 0; i < regNumber.length; i++) {
        let regNum = regNumber[i].trim();
        if (regNum.startsWith("CJ")) {
            regNumCounter++;
        }
    }
    return regNumCounter;
}