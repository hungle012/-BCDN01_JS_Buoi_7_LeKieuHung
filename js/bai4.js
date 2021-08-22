function sumXn() {
    var x = parseInt(document.getElementById("inputX").value);
    var n = parseInt(document.getElementById("inputN").value);
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += x ** i;
    }
    document.getElementById("txtBai4").innerHTML = "Tổng: " + sum;
}
document.getElementById("btnBai4").onclick = sumXn;