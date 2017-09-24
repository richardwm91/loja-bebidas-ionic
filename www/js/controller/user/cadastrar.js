app.controller('CadastroUsuarioCtrl', function ($scope, $state) {
  $scope.form = {
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  $scope.form.mensagens = [];

  $scope.novoCadastro = function () {
    $state.go('categorias')
  };
});
