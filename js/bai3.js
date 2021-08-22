function sumTo10000() {
    var sum = 0;
    var i = 0;
    while (sum < 10000) {
        i++;
        sum += i;
    }
    document.getElementById("txtBai3").innerHTML = "Số nguyên dương nhỏ nhất để tổng 1 + 2 +..+ n < 10000 là: " + i;
}

document.getElementById("btnBai3").onclick = sumTo10000;
