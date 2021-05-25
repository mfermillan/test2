const { Router } = require('express');
const router = Router();

//const productos =require('./data.json');
//console.log(productos);

const productosCtrl = require('../controllers/productos.controller')

router.get('/', productosCtrl.getProducts);

router.get('/:id', productosCtrl.getProduct);

router.delete('/:id', productosCtrl.deleteProduct);

router.put('/:id', productosCtrl.updateProduct);

router.post('/', productosCtrl.createProduct);

module.exports = router;