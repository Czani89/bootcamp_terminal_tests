module.exports = function(regNum, regNumStr) {
    //console.log(regNumStr)
    let regN = regNum.split(",");

    let allReg = [];
    var regCount = 0;
    for (let i = 0; i < regN.length; i++) {
        var trimmedRegN = regN[i].trim();

        if (trimmedRegN.startsWith(regNumStr)) {
            allReg.push(trimmedRegN);
            regCount++;
        }
    }
    return regCount;
}