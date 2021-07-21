module.exports = function (objList, threshold) {
    let itemArr = []

    for (let i = 0; i < objList.length; i++) {
        var listItem = objList[i];
        if (listItem.qty > threshold) {
            itemArr.push(listItem)
        }
    }
    return itemArr
}