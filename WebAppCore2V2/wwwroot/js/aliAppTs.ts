var app = angular.module('AliApp', []);

app.controller('AliController', ['$scope', '$http', function AliController($scope, $http) {
    $scope.Adi = "Ali";
    $scope.Soyadi = "GÜDER";
    $scope.Maliyet = 45.00;
    $scope.Miktar = 5;
    $scope.Disabled = true;
    $scope.Numarasi = 6778;
    $scope.seciliSehir = "";
    $scope.aciklamaMetni = "İlk Direktive Metni 45";

    $scope.ogrenci =
    {
        Numarasi: 564,
        Adi: 'Birsen',
        Soyadi: 'ADAGÜL'
    };

    //var num4 = ogrenci.Numarasi;

    $scope.islemYap = function () {

        //alert("Tıklandı.");

        $("#satir1").html("nbvnvbnbv");
        $("#dvBasariMesaj").show();
        
        //alert("Secili Şehir: " + $scope.seciliSehir);

        //debugger;

        //$(function () {

        //var post = $http({
        //    method: "POST",
        //    url: "/Home/MesajGetir",
        //    dataType: 'json',
        //    data: { Adi: $scope.Adi, Soyadi: $scope.Soyadi, Numarasi: $scope.Numarasi },
        //    headers: { "Content-Type": "application/json" }
        //});

        //post.success(function (data, status) {
        //    alert("Mesaj: " + data.Adi + " " + data.Soyadi + " " + data.Numarasi);
        //});

        //post.error(function (data, status) {
        //    alert("Hatalı Durum!");
        //});

        //});
        //{params: { Adi: $scope.Adi, Soyadi: $scope.Soyadi, Numarasi: $scope.Numarasi } }


        //$http.post('/Home/MesajGetir', { params: { Adi: $scope.Adi, Soyadi: $scope.Soyadi, Numarasi: $scope.Numarasi } }).then(
        //    function (successResponse) {
        //        alert("Mesaj: " + successResponse.data.adi + " " + successResponse.data.soyadi);
        //    },
        //    function (errorResponse) {
        //        alert("Hatalı Durum!");
        //    });


    }

    $scope.sehirler = [
        { kodu: 6, adi: "Ankara" },
        { kodu: 7, adi: "Antalya" },
        { kodu: 34, adi: "İstanbul" },
    ];

    $scope.Aciklama = 'Açıklama Getirme';

    $scope.ogrenciler =
        [
            { Adi: "Gizem", Soyadi: "ERGÖNEN" },
            { Adi: "Ali", Soyadi: "ADALI" },
            { Adi: "Serap", Soyadi: "AKAR" }
        ];

    toplamSayisiGoster();
}]);

//app.controller('angAliController', ['$scope', function angAliController($scope) {

//    $scope.baslik = "angAliController";

//}]);