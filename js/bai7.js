function ktSNT(so) {
    if (so < 2) {
        return false;
    }
    for (var i = 2; i < so; i++) {
        if (so % i == 0) {
            return false;
        }
    }
    return true;
}
function inSNT() {
    var n = parseInt(document.getElementById("inputNum2").value);
    var soNT = "";

    for (var i = 1; i <= n; i++) {
       if (ktSNT(i)) {
           soNT += i + " ";
       }
    }
    document.getElementById("txtBai7").innerHTML = soNT;
}
document.getElementById("btnBai7").onclick = inSNT;