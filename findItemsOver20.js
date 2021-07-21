module.exports = function (objects) {
    let itemArr = []

    for (let i = 0; i < objects.length; i++) {
        var listItem = objects[i];
        if (listItem.qty > 20) {
            itemArr.push(listItem)
        }
    }
    return itemArr
}