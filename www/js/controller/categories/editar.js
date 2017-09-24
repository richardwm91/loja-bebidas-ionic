app.controller('CategoriaEditarCtrl', function ($scope, CategoriaService, $state, $stateParams) {
  $scope.categoria = $stateParams.categoria ? JSON.parse($stateParams.categoria) : {
    nome: ""
  };

  $scope.salvarCategoria = function (categoria) {
    console.log(categoria);
    $state.go('novoCategoria', {categoria: $scope.categoria});
  };

});
