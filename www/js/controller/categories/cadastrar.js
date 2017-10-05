app.controller('CategoriaCadastrarCtrl', function ($scope, $firebaseArray, $state) {
    
   $scope.salvar = function(categoria){
    var ref = firebase.database().ref().child('categorias');
    $firebaseArray(ref).add(categoria);
    $state.go('categorias')
   };

});
