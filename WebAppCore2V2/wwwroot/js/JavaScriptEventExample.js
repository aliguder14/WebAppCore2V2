
//var event = new CustomEvent('MyEvent', {
//    'detail':{ num2 : 12 }
//});

var event = new CustomEvent('MyEvent');

//document.addEventListener('MyEvent', bolmeYap(12), false);
document.addEventListener('MyEvent', () => {
    var sonuc = 9 / 3;
    //alert("Sonuç " + sonuc);
}, false);

var num1 = 6;

function bolmeYap(num2) {

    var sonuc = 9 / 3;

    //alert("Sonuç " + sonuc);
}

if (num1 == 6) {
     document.dispatchEvent(event);
}

