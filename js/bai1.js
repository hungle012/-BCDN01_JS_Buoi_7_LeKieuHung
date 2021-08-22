function inSo() {
    var soChan = "";
    var soLe = "";
    
    // lặp với for
    // for (var i = 0; i < 100; i++) {
    //     if (i % 2 == 0) {
    //         soChan += i + " ";
    //     } else {
    //         soLe += i+ " ";
    //     }
    // }

    // lặp với while 
    var i = 0;
    while (i < 100) {
        if (i % 2 == 0) {
            soChan += i + " ";
        } else {
            soLe += i+ " ";
        }
        i++;
    } 
    document.getElementById("txtBai1").innerHTML = "Số chẵn: " + soChan + "<br> Số lẻ: " + soLe;
}

document.getElementById("btnBai1").onclick = inSo;