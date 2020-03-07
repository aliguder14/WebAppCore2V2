(function () {
    'use strict';

    angular
        .module('AliApp')
        .directive('personelDirective', personelDirective);

    //personelDirective.$inject = ['$window'];

    function personelDirective() {
        // Usage:
        //     <ilkDirective></ilkDirective>
        // Creates:
        // 
        var directive = {
            //link: link,
            //restrict: 'EA'
            //template: "<h1>İlk Direktive Güzel Bir Şey</h1>"
            template: "<h1>{{aciklamaMetni}}</h1>"
        };

        directive.scope = {
            aciklamaMetni: "=deger"
        };

        return directive;

        //function link(scope, element, attrs) {
        //}
    }

})();