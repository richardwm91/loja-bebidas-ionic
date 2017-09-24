app.controller('ProdutosEditarCtrl', function ($scope, ProdutoService, $state, $stateParams) {
  $scope.produto = $stateParams.produto ? JSON.parse($stateParams.produto) : {
    nome: "",
    preco: 0.0
  };

  $scope.salvarProduto = function (produto) {
    console.log(produto);
    $state.go('novoProduto', {produto: $scope.produto});
  };

});
