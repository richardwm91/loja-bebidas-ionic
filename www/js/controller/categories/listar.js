app.controller('CategoriaListarCtrl', function ($scope, $state) {
  var ref = firebase.database().ref('categorias');

  ref.on('value', function(data){
    $scope.categorias = data.val();
    $scope.$apply()
  });

  $scope.editarCategoria = function (categoria) {
  console.log("listar", categoria)
    $state.go('editarCategoria' ,{
      categoria:JSON.stringify(categoria)
    })
  };

});
