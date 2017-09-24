app.controller('ProdutosCadastrarCtrl', function ($scope, $state) {

  $scope.cadastrarProduto = function () {
    $state.go('novoProduto');
  };

});
