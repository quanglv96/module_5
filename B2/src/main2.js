var x1 = 0;
var x2 = 1;
var choice = 0;
var flag = true;
while (flag) {
    choice++;
    console.log(x1 + x2);
    x1 = x2;
    x2 = x1 + x2;
    if (choice === 10) {
        flag = false;
    }
}
