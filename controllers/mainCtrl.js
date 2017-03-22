const express = require('express');
const Massive = require('massive');
const connectionString = "postgres://MrGaud@localhost/massiveproject"
const app = express();

const massiveInstance = Massive.connectSync({
    connectionString: connectionString
})

app.set('db', massiveInstance);
const db = app.get('db')

function gettem(obj) {
    // console.log(arguments);
    var params = [];
    for (var i = 1; i < arguments.length; i++) {
        params.push(obj[arguments[i]])
    }
    console.log(params);
    return params
}
module.exports = {
    index: function(req, res) {
        db.read_products(function(err, products) {
            console.log('hitting index');
            res.status(200).send(products)
        })
    },
    show: function(req, res) {
        db.read_product(req.params.id, function(err, product) {
            res.status(200).send(product)
        })
    },
    create: function(req, res) {
        db.create_product(req.body.name, req.body.description, req.body.price, req.body.imgurl, function(err, product) {
            res.status(201).send(product)
        })
    },
    update: function(req, res) {
        db.products.update({id:req.params.id},req.body,function(err,succ){
            res.status(201).send(succ)
        })
    },
    delete: function(req,res){
        db.delete_product(req.params.id,function(err,succ){
            console.log(err);
            console.log(succ);
            res.status(203).send(succ)
        })
    }
}
