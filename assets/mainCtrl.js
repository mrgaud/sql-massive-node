app.controller('mainCtrl',function($scope,mainSrvc){
    mainSrvc.getProducts().then(function(response){
        $scope.products = response.data
    })

    $scope.addProduct = function(name,desc,price,imgurl){
        let data = {
            name:name,
            description:desc,
            price:price,
            imgurl:imgurl
        }
        console.log(data);
        mainSrvc.addProduct(data)
    }
    $scope.test='hello world'
})
