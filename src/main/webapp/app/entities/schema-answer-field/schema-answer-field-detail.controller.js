(function() {
    'use strict';

    angular
        .module('prova0App')
        .controller('SchemaAnswerFieldDetailController', SchemaAnswerFieldDetailController);

    SchemaAnswerFieldDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'SchemaAnswerField', 'SchemaAnswer', 'SchemaField'];

    function SchemaAnswerFieldDetailController($scope, $rootScope, $stateParams, previousState, entity, SchemaAnswerField, SchemaAnswer, SchemaField) {
        var vm = this;

        vm.schemaAnswerField = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('prova0App:schemaAnswerFieldUpdate', function(event, result) {
            vm.schemaAnswerField = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
