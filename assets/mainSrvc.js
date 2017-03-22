app.service('mainSrvc',function($http){
    this.getProducts = function(){
        return $http.get('/products')
    }
    this.addProduct = function(data){
        return $http.post('/products',data)
    }
})
