
var cekRuangan  = 1
var ruanganYangAdaSaklarnyaItuDiRuangan = 12
var totalRuangan = 200

while (cekRuangan < totalRuangan) {
    if (cekRuangan -- ruanganYangAdaSaklarnyaItuDiRuangan) {
        console.log("nyalakan lampu");
        cekRuangan =+ 200}
    else if (cekRuangan != ruanganYangAdaSaklarnyaItuDiRuangan) {
        cekRuangan + 1}
    else }

    
SET KECEPATAN TO 20
SET JUMLAH PENUMPANG 0 <= 4 

IF JUMLAH PENUMPANG <=4 THEN
  IF JUMLAH PENUMPANG = 4 THEN 
    SET KECEPATAN TO KECEPATAN -7
  ELSE IF JUMLAH PENUMPANG = 3 THEN
    SET KECEPATAN TO KECEPATAN -5
  ELSE 
    SET KECEPATAN TO KECEPATAN -2
  END IF
ELSE  
  DISPLAY 'Berat'
END IF
DISPLAY KECEPATAN

