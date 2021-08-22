function tinhGiaiThua() {
    var n = parseInt(document.getElementById("inputNum").value);
    var giaiThua = 1;

    for (var i = 1; i <= n; i++) {
        giaiThua *= i; 
    }
    document.getElementById("txtBai5").innerHTML = "Giai thừa: " + giaiThua;
}
document.getElementById("btnBai5").onclick = tinhGiaiThua;