(function() {
    'use strict';

    angular
        .module('prova0App')
        .controller('SchemaAnswerDetailController', SchemaAnswerDetailController);

    SchemaAnswerDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'SchemaAnswer', 'Schema1', 'Person', 'SchemaAnswerField'];

    function SchemaAnswerDetailController($scope, $rootScope, $stateParams, previousState, entity, SchemaAnswer, Schema1, Person, SchemaAnswerField) {
        var vm = this;

        vm.schemaAnswer = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('prova0App:schemaAnswerUpdate', function(event, result) {
            vm.schemaAnswer = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
