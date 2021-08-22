function taoThe() {
    var content = "";
    var theChan = "<div style ='background:red; padding:10px'><span style ='color:white'>Div chẵn</span></div>";
    var theLe = "<div style ='background:blue; padding:10px'><span style ='color:white'>Div lẻ</span></div>";

    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += theChan;
        } else {
            content += theLe;
        }
    }
    document.getElementById("divBai6").innerHTML = content;
}
document.getElementById("btnBai6").onclick = taoThe;