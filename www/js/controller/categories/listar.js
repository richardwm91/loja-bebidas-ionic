app.controller('CategoriaListarCtrl', function ($scope, CategoriaService, $state) {
  var categoria1 = {
    imagem:'img/refris.png',
    nome: 'Refrigerantes'
  };

  var categoria2 = {
    imagem:'img/refris.png',
    nome: 'Sucos',
  };

  //insere na lista
  CategoriaService.create(categoria1,categoria2);

  //exibir as categorias.
  $scope.categorias = CategoriaService.read();

  $scope.editarCategoria = function (categoria) {
    console.log("listar",categoria);
    $state.go('produtos', {
      categoria:JSON.stringify(categoria)
    })
  };

  $scope.novaCategoria = function () {
    $state.go('novaCategoria')
  }

});

app.factory('CategoriaService', function () {
  var lista = []; // banco volatil

  //exibe a lista
  return {
    read: function () {
      return lista;
    },

    //recebe parametros para adicionar no banco volatil
    create: function (objetoCategoria) {
      lista.push(objetoCategoria)
    }
  }
});
