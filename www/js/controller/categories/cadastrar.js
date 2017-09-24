app.controller('CategoriaCadastrarCtrl', function ($scope, $state) {

  $scope.cadastrarCategoria = function () {
    $state.go('novaCategoria');
  };

});
