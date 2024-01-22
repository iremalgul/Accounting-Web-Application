
function ajaxSendDataWithLoadingGetData(pData, pUrl, pOKfunction) {
    var result = new Object();
    result.Sonuc = false;
    if (typeof pData === 'object') {
        pData = JSON.stringify(pData);
    }
    //if (pLoadingElement !== null) var loading = new ajaxLoader(pLoadingElement, { classOveride: 'blue-loader' });

    $.ajax({
        type: "POST",
        traditional: true,
        url: pUrl,
        async: true,
        data: pData,
        dataType: "JSON",
        contentType: "application/json",
        success: function (data) {

            //if (pLoadingElement !== null) loading.remove();
            pOKfunction(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            //if (pLoadingElement !== null) loading.remove();
            //alert(pUrl + "-" + pData + "-" + xhr.status + "/" + thrownError);
            alert('İşlem Gerçekleştirilemedi.Sistem Yöneticinizle İletişime Geçiniz!');
        }
    });

}
//Ajax partialview basar
function ajaxPartialView(pData, pUrl, pLoadPartialElement, pOKfunction) {
    if (typeof pData === 'object') {
        pData = JSON.stringify(pData);
    }
    //if (pLoadingElement !== null) var loading = new ajaxLoader(pLoadingElement, { classOveride: 'blue-loader' });
    $.ajax({
        type: "POST",
        url: pUrl,
        data: pData,
        dataType: 'text',
        async: true,
        contentType: false,
        processData: false,
        success: function (data) {
           
            pLoadPartialElement.html(data);
            pOKfunction();

        },
        error: function (error) {
            alert('Bir Sorun Oluştu Daha Sonra Tekrar Deneyiniz.');
           
        }
    });
}


//Sadece mesaj ver
function BasariliMesajVer(pBaslik, pMesaj, pTamamFonsiyonu) {
    $.confirm({
        title: pBaslik,
        content: pMesaj,
        type: 'green',
        typeAnimated: true,
        buttons: {
            //tryAgain: {
            //    text: 'Try again',
            //    btnClass: 'btn-red',
            //    action: pTamamFonsiyonu
            //},
            close: pTamamFonsiyonu
        }
    });
}
function HataMesajVer(pBaslik, pMesaj, pTamamFonsiyonu) {
    $.confirm({
        title: pBaslik,
        content: pMesaj,
        type: 'red',
        typeAnimated: true,
        buttons: {
            //tryAgain: {
            //    text: 'Try again',
            //    btnClass: 'btn-red',
            //    action: pTamamFonsiyonu
            //},
            close: pTamamFonsiyonu
        }
    });
}

//Soru sorar evet hayıra göre işlem yapar
function SoruSor(pBaslik, pMesaj, pTamamFonsiyonu) {
    
}

function EvetHayir(pBaslik, pMesaj, pTamamFonsiyonu, pHayirFonsiyonu) {
    
}
//Inputlar için sadece numara girilebilir özelliği ekler.
function InputNumberMask(pSelector) {
    $('' + pSelector).keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
}

function InputDecimalMask(pSelector) {
    $(pSelector).keydown(function (event) {


        if (event.shiftKey == true) {
            event.preventDefault();
        }

        if ((event.keyCode >= 48 && event.keyCode <= 57) ||
            (event.keyCode >= 96 && event.keyCode <= 105) ||
            event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 ||
            event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190) {

        } else {
            event.preventDefault();
        }

        if ($(this).val().indexOf('.') !== -1 && event.keyCode == 190)
            event.preventDefault();

    });
}
//Input için max. karakter sayısı belirler.
function InputMaxLength(pSelector, pLength) {
    $('' + pSelector).keypress(function (e) {
        if ($('' + pSelector).val().length >= pLength) {
            return false;
        }
    });
}
//number tipli inputlar için minimum ve maximum değer girme kontrolü sağlar
function InputMinMaxValue(pSelector, pMin, pMax, pNumberParam) {
    var input = $('' + pSelector)[0];
    if (pNumberParam != null) {
        if (pNumberParam) {
            if (input.type !== "number") {
                console.log("(" + pSelector + ") tipi number değil");
                return;
            }
        }
    }
    $('' + pSelector).keyup(function (e) {
        if ($(this).val() === "") {
            return true;
        }
        if ($(this).val() < pMin) {
            $(this).val(pMin);
            return false;
        } else if ($(this).val() > pMax) {
            $(this).val(pMax);
            return false;
        }
        return true;
    });
}
//Sayfayı yeniler
function SayfaYenile() {
    window.location.reload();
}
//Sayfayı verilen adrese yönlendirir
function SayfaYonlendir(url) {
    window.location.href = url;
}
//Url üezrindeki bir parametrenin değerini verir Kullanım:QueryString.parametreAdı
var QueryString = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();
function TCNoKontrol(tcNo) {
    var tcno = tcNo;

    var dogru = false;
    if (tcno.length === 11) {

        dogru = true;
    }
    else {
        dogru = false;
    }
    if (!isNaN(tcno)) {
        dogru = true;
    }
    else {
        dogru = false;
    }

    if (dogru && parseInt(tcno) % 2 == 0) {

        dogru = true;
    }
    else {
        dogru = false;
    }
    var char = new Array(tcno.charAt(0), tcno.charAt(1), tcno.charAt(2), tcno.charAt(3), tcno.charAt(4), tcno.charAt(5), tcno.charAt(6), tcno.charAt(7), tcno.charAt(8), tcno.charAt(9), tcno.charAt(10));
    var cifttoplam = 0;
    var tektoplam = 0;
    for (var i = 0; i < 9; i++) {
        if ((i + 1) % 2 == 0) {
            cifttoplam += parseInt(char[i].toString());
        }
        else {
            tektoplam += parseInt(char[i].toString());
        }
    }
    var sonuc = (tektoplam * 7) - cifttoplam;
    sonuc = sonuc % 10;
    if (sonuc == parseInt(char[9].toString()) && dogru) {
        dogru = true;
    }
    else {
        dogru = false;
    }
    sonuc = 0;
    for (var i = 0; i < 10; i++) {
        sonuc += parseInt(char[i].toString());
    }
    if (sonuc % 10 == parseInt(char[10].toString()) && dogru) {
        dogru = true;
    }
    else {
        dogru = false;
    }

    return dogru;
}

function loadMaxLength() {
    $('input, textarea').each(function () {
        if ($(this).attr('maxlength') !== undefined) {
            var $input = $(this);

            $input.inputlimiter({
                remText: '%n /',
                remFullText: 'Maksimum karakter sayısına ulaşıldı',
                limitText: ' %n '
            });
        }

    });


}

// Modal üzerindeki elementlerin tümünü validationları ile beraber temizleyen fonksiyondur.
function FormAllClear(element) {
    var value = "";
    $("input, select, textarea", element).each(function () {
        if ($(this).prop("tagName").toLowerCase() === "select" && $(this).filter(".select2")) $(this).val('').trigger("change");

        if ($(this).parent("div").hasClass("has-error")) {
            $(this).parent("div").removeClass("has-error has-feedback");
            $(this).next("span.error").remove();
        }
        $(this).parent("div").removeClass("has-success has-feedback");
        if ($(this).hasClass("spinbox-input")) value = 1;
        $(this).val(value);
        $(this).next("i").remove();
    });
}
//Javascript tarih karşılaştırmaları için gönderilen değeri date tipine çevirir.

function dateParser(type, value) {
    var processDate = value.replace(/ /g, '');
    processDate = processDate.replace(/[:\/\\.]/g, '-');
    var dateArray = processDate.split("-");

    if (type == "date") {
        return new Date(dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0] + " " + "00:00:00");
    } else {
        var emtySecond = "00";
        (typeof dateArray[5] === 'undefined') ? emtySecond = "00" : emtySecond = dateArray[5];
        return new Date(dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0] + " " + dateArray[3] + ":" + dateArray[4] + ":" + emtySecond);
    }
}
//Başarılı mesajı verir
function BasariliMesajiVer(pMesaj, pTamamFonsiyonu) {
    MesajVer('Başarılı', pMesaj, pTamamFonsiyonu, false);
}
function HataMesajiVer(pMesaj, pTamamFonsiyonu) {
    MesajVer('Hata', pMesaj, pTamamFonsiyonu, true);
}
