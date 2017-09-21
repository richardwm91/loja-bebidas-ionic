var app = angular.module('servfesta', ['ionic']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/user/login.html',
    controller: 'LoginCtrl'
  });

  $stateProvider.state('novoUsuario', {
    url: '/novo-usuario',
    templateUrl: 'templates/user/cadastro.html',
    controller: 'CadastroUsuarioCtrl'
  });

  $stateProvider.state('produtos', {
    url: '/produtos',
    templateUrl: 'templates/product/produto.html',
    controller: 'ProdutosCtrl'
  });

  $stateProvider.state('novoProduto', {
    url: '/novo-produto',
    templateUrl: 'templates/product/cadastro.html',
    controller: 'ProdutosCtrl'
  });

  $stateProvider.state('editarProduto', {
    url: '/editar-produto/:produto',
    templateUrl: 'templates/product/cadastro.html',
    controller: 'ProdutosCtrl',
    resolve: {
      produto: function ($stateParams, ProdutoService) {
        const produtos = ProdutoService.read()
        for (i = 0; i < produtos.length; i++) {
          if (produtos[i].nome == $stateParams.produto){
            return produtos[i]
          }
        }

        return $state.go('produtos');
      }
    }
  });

  $urlRouterProvider.otherwise('/login');
});

app.controller('CadastroUsuarioCtrl', function ($scope, $state) {
  $scope.form = {
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  $scope.form.mensagens = [];

  $scope.novoCadastro = function () {
    $state.go('produtos')
  };
});

app.controller('ProdutosCtrl', function ($scope, ProdutoService, $state) {
  //exibir os produtos.
  $scope.produtos = ProdutoService.read();

  for (i = 0; i < $scope.produtos.length; i++) {
    if ($scope.produtos[i].nome == $state.produto){
      $scope.produto = produtos[i]
    }
  }

  var produto1 = {
    nome: 'Refrigerantes',
    preco: 'R$ 5,89'
  };

  //insere na lista
  ProdutoService.create(produto1);

  $scope.adicionarNovoProduto = function () {
    //chamar tela de cadastro de um novo produto
    $state.go('novoProduto');
  };

  $scope.editarProduto = function (produto) {
    console.log(produto)
    $state.go('editarProduto', { produto: produto.nome });
  };

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
