let isim = prompt("İsminizi Yazınız!..");
let misafir = document.querySelector('#myName');
if (isim) {
    misafir.innerHTML = isim;
}else{
    misafir.innerHTML = "Lütfen isim giriniz !!!";
    document.querySelector('.blok2').style = "height:3000px;width:100%;position: absolute;z-index: 200;top:0;left:0;background-color: red;color: white;font-size: 40px;";
}

function showTime() {
    let myclock = document.querySelector('#myClock');
    let dte = new Date();
    let saat = dte.getHours();
    let dakika = dte.getMinutes();
    let saniye = dte.getSeconds();
    let gun = dte.getDay();

    if(gun==0){
        gun = "PAZAR";
    }else if(gun==1){
        gun = "P.TESİ";
    }else if(gun==2){
        gun = "SALI";
    }else if(gun==3){
        gun = "ÇARŞAMBA";
    }else if(gun==4){
        gun = "PERŞEMBE";
    }else if(gun==5){
        gun = "CUMA";
    }else if(gun==6){
        gun = "C.TESİ";
    }
    myclock.innerHTML = `${saat}:${dakika}+${saniye} ${gun}`

}
showTime();
