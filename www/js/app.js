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
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  });

  $stateProvider.state('cadastroUsuario', {
    url: '/novo-usuario',
    templateUrl: 'templates/cadastro.html',
    controller: 'CadastroUsuarioCtrl'
  });

  $stateProvider.state('produtos', {
    url: '/produtos',
    templateUrl: 'templates/produtos.html',
    controller: 'ProdutosCtrl'
  });

  $urlRouterProvider.otherwise('/login');
});

app.controller("LoginCtrl", function ($scope, $state) {
  $scope.form = {
    email: '',
    senha: ''
  };

  $scope.form.mensagens = [];

  $scope.cadastroUsuario = function () {
    $state.go('cadastroUsuario');
  };

  $scope.login = function () {
    if (this.form.email === '' || this.form.senha === '') {
      return this.form.mensagens.push("Preencha os campos");
    }

    $state.go('produtos');
  }
});

app.controller('CadastroUsuarioCtrl', function ($scope, $state) {
  $scope.form = {
    email:'',
    senha: '',
    confirmarSenha: ''
  };

  $scope.form.mensagens = [];

  $scope.novoCadastro = function () {
    $state.go('produtos')
  };
});

app.controller('ProdutosCtrl', function ($scope, ProdutoService, $state) {
  var produto1 = {
    nome:'Refrigerantes',
    preco:'R$ 5,89'
  };

  //insere na lista
  ProdutoService.create(produto1);

  //exibir os produtos.
  $scope.produtos = ProdutoService.read();

  $scope.adicionarNovoProduto = function () {
    //chamar tela de cadastro
  };

  $scope.editarProduto = function () {

  };

});

app.factory('ProdutoService', function () {
  var lista = []; // banco volatil

  //exibe a lista
  return{
    read: function () {
 return lista;
    },

    //recebe parametros para adicionar no banco volatil
    create:function (objetoProduto) {
      lista.push(objetoProduto)
    }
  }
});
