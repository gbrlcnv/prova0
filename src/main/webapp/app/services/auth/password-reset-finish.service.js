(function() {
    'use strict';

    angular
        .module('prova0App')
        .factory('PasswordResetFinish', PasswordResetFinish);

    PasswordResetFinish.$inject = ['$resource'];

    function PasswordResetFinish($resource) {
        var service = $resource('api/account/reset-password/finish', {}, {});

        return service;
    }
})();
