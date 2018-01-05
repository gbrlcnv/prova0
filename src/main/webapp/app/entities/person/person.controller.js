(function() {
    'use strict';

    angular
        .module('prova0App')
        .controller('PersonController', PersonController);

    PersonController.$inject = ['Person'];

    function PersonController(Person) {

        var vm = this;

        vm.people = [];

        loadAll();

        function loadAll() {
            Person.query(function(result) {
                vm.people = result;
                vm.searchQuery = null;
            });
        }
    }
})();
