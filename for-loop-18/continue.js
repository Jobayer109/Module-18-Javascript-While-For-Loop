var items = [14, 5, 36, 8, 56, 63, 79, 80, 89, 91]
for (var i = 0; i < items.length; i++) {
    item = items[i]
    if (item > 79) {
        continue;
    }
    console.log(item)
}
