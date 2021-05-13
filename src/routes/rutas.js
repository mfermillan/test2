const { Router } = require('express');
const router = Router();

const productos =require('./data.json');
console.log(productos);

router.get('/', (req,res) =>{
    res.json(productos);
});

router.get('/:id', (req,res) =>{
    const {id}= req.params;
    productos.forEach(producto => {
        if(producto.id == id){
            res.json(producto);
        }
    });
    console.log(id);
});

router.post('/', (req,res) => {
    const {title, version, genre} = req.body;
    if(title && version && genre){
        const id = juegos.length +1;
        const nuevoJuego = {...req.body, id};
        juegos.push(nuevoJuego);
        //console.log(nuevoJuego);
        res.status(200).json(juegos);
    }else{
        res.status(500).json({error:'no data'});
    }
});

module.exports = router;