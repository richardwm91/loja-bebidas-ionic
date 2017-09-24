app.controller('ProdutosListarCtrl', function ($scope, ProdutoService, $state) {
  var produto1 = {
    nome: 'Refrigerantes',
    preco: 'R$ 5,89'
  };

  //insere na lista
  ProdutoService.create(produto1);

  //exibir os produtos.
  $scope.produtos = ProdutoService.read();

  $scope.editarProduto = function (produto) {
    console.log("listar",produto);
    $state.go('editarProduto', {
      produto:JSON.stringify(produto)
    })
  };

  $scope.novoProduto = function () {
    $state.go('novoProduto')
  }

});

app.factory('ProdutoService', function () {
  var lista = []; // banco volatil

  //exibe a lista
  return {
    read: function () {
      return lista;
    },

    //recebe parametros para adicionar no banco volatil
    create: function (objetoProduto) {
      lista.push(objetoProduto)
    }
  }
});
