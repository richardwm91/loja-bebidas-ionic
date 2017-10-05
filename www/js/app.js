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
    templateUrl: 'templates/product/listar.html',
    controller: 'ProdutosListarCtrl'

  });
  $stateProvider.state('novoProduto', {
    url: '/novo-produto',
    templateUrl: 'templates/product/cadastro.html',
    controller: 'ProdutosCadastrarCtrl'
  });
  $stateProvider.state('editarProduto', {
    url: '/editar-produto/:produto',
    templateUrl: 'templates/product/editar.html',
    controller: 'ProdutosEditarCtrl'
  });

  $stateProvider.state('categorias', {
    url: '/categorias',
    templateUrl: 'templates/categories/listar.html',
    controller: 'CategoriaListarCtrl'

  });
  $stateProvider.state('novaCategoria', {
    url: '/novo-categoria',
    templateUrl: 'templates/categories/cadastro.html',
    controller: 'CategoriaCadastrarCtrl'
  });
  $stateProvider.state('editarCategoria', {
    url: '/editar-categoria/:categoria',
    templateUrl: 'templates/categories/editar.html',
    controller: 'CategoriaEditarCtrl'
  });

  $urlRouterProvider.otherwise('/login');
});
