module.exports = function (salesData) {
    const saleMap = {};

    for (var i = 0; i < salesData.length; i++) {
        const saleDate = salesData[i];
        saleMap[saleDate.department] = 0;
    }
    for (var i = 0; i < salesData.length; i++) {
        var saleDate = salesData[i];
        var currentTot = saleMap[saleDate.department];

        currentTot += saleDate.sales;
        saleMap[saleDate.department] = currentTot;
    }
    var currentSales = 0;
    var currentDep = "";
    for (const departSales in saleMap) {
        const currentDepSales = saleMap[departSales];
        if (currentDepSales > currentSales) {
            currentSales = currentDepSales;
            currentDep = departSales

        }
    }
    return currentDep

}
