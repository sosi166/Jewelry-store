import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    photo: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    nameHy: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    material: {
        type: String,
        require: true,
    },
    materialHy: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    },
    textHy: {
        type: String,
        require: true,
    },
    kod: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
        default: 0,
    }
    

},
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema);

export default Product;