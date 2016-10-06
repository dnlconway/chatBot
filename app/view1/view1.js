'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('View1Ctrl', ['$http', function($http) {

	var vm = this;

	var OPTS = ['Option1', 'Option2', 'Option3'];

	vm.sendMessage = sendMessage;
	vm.clearMessages = clearMessages;
	vm.sendChosenOption = sendChosenOption;

	vm.messages = [];
	vm.availableOptions = [];

	function sendMessage(text) {
		vm.messages.push(text);

		$http({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts/1'
		}).then(function successCallback(response) {

			vm.messages.push(response.data);

			vm.availableOptions = OPTS;

		}, function errorCallback(error) {
			console.log(error);
		});

		vm.inputMessage = '';
	}

	function sendChosenOption(chosenOption) {
		vm.messages.push(chosenOption);

		vm.inputMessage = '';	
		vm.availableOptions = [];
	}

	function clearMessages() {
		vm.messages = [];
	}


}]);