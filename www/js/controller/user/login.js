app.controller("LoginCtrl", function ($scope, $state) {
  $scope.form = {
    email: '',
    senha: ''
  };

  $scope.form.mensagens = [];

  $scope.cadastroUsuario = function () {
    $state.go('novoUsuario');
  };

  $scope.login = function () {
    this.form.mensagens = [];
    if (this.form.email === '' || this.form.senha === '') {
      return this.form.mensagens.push("Preencha os campos");
    }

    $state.go('categorias');
  }
});
