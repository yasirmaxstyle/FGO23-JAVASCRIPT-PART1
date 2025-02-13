function totalBelanja(total) {
    let jumlahTotal = parseInt(total);
    let diskon = 0;
    if (jumlahTotal => 500000 && jumlahTotal <= 1000000) {
        diskon += 0.05;
        diskon *= jumlahTotal;
    } else if (jumlahTotal > 1000000) {
        diskon += 0.1;
        diskon *= jumlahTotal;
    }
    let totalAkhir = jumlahTotal - diskon;
    console.log(`Total belanja Anda adalah ${totalAkhir} rupiah`)
}

totalBelanja(100000);
totalBelanja(700000);
totalBelanja(2000000);