module.exports = function (callsMade) {
    let payCall = [];
    let paySms = [];
    let callNumb = callsMade.split(", ")
    for (let i = 0; i < callNumb.length; i++) {
        if (callNumb[i].startsWith("c")) {
            payCall.push(callNumb[i]);
        };
        if (callNumb[i].startsWith("s")) {
            paySms.push(callNumb[i]);
        }
    }

    let totalVar = (payCall.length * 2.75) + (paySms.length * 0.65);
    return ("R" + totalVar.toFixed(2))

}