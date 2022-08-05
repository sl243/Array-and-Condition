var numbers = [23, 54, 67, 11, 78, 98];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number >= 50 && number <= 90) {
        continue;
    }
    console.log(number);
}

// var items = ['A', 'B', 'C', 'D'];
// for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if (item == 'B') {
//         continue;
//     }
//     console.log(item);
// }