import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: true  
    },

    price : {
        type: Number,
        required: true
    },

    image : {
        type: String,
        required: true
    } , 

}

, {
    timestamps: true
});  // timestamps: true will automatically create a createdAt and updatedAt field for each product  


const Product = mongoose.model('Product', productSchema);

export default Product;  // export the Product model