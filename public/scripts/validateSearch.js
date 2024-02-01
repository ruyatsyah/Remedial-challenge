function validateAndSearch() {
    var driver = document.getElementById('driver').value;
    var date = document.getElementById('date').value;
    var waktu = document.getElementById('waktu').value;
    var penumpang = document.getElementById('penumpang').value;

    if (!driver || !date || !waktu || !penumpang) {
      alert('Semua kolom harus diisi. Mohon isi semua kolom sebelum mencari mobil.');
    } else {
      searchCars(driver, date, waktu, penumpang);
    }
  }

  function searchCars(driver, date, waktu, penumpang) {
    console.log('Pencarian mobil dengan driver:', driver, 'tanggal:', date, 'waktu:', waktu, 'penumpang:', penumpang);
  }