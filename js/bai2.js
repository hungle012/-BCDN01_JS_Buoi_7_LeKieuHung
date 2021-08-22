function countChia3() {
    var count = 0;
    // lặp với for
    // for (var i = 0; i < 1000; i++) {
    //     if (i % 3 == 0) {
    //         count += 1;
    //     }
    // }

    // lặp với while
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            count += 1;
        }
        i++;
    }
    
    document.getElementById("txtBai2").innerHTML = "Số chia hết cho 3 và nhỏ hơn 1000 có: " + count + " số";
}

document.getElementById("btnBai2").onclick = countChia3;