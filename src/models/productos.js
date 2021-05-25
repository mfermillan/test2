const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    title:{type:String, required:true},
    category:{type:String, required:true},
    qty:{type: Number, required:true},
    qty_name:{type:String, required:true},
    img:{type:String, required:true}
},{
    timestamps:true, //agregar tiempo de creación y modificación 
    versionKey:false
})

module.exports = model('productos', ProductSchema)