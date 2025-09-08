import MONGOOSE from "mongoose";

const ProductSchema = new MONGOOSE.Schema({
  title: { type: String, required: true, minLength: 3 },
  category: { type: String, required: true, minLength: 2 },
  price: { type: Number, required: true }
});

const ProductModel = MONGOOSE.model("Product", ProductSchema);

export default ProductModel;
