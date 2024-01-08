import db from "../models/index.js";
import product from "../models/product.js";

const { ProductModel, UserModel} = db;

export const addProduct = async (req, res) => {
    try{
    const{title, category, description, price, supplier} = req.body;
    const userId = req.user.id;
    const product = await ProductModel.create({
        title,
        category,
        description,
        price,
        supplier,
        userId, 
      });

      res.status(201).json({ product });
    }catch(error){
        console.error(error);
        res
        .status(500)
        .json({error: 'Internal Server Error' })
    }
}

export const getAllProduct = async (req, res) => {
    try{
        const products = await ProductModel.findAll();
      res.status(200).json({ products });
    
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal Server Error' })
    }
}

export const getProductById = async (req, res) => {
    try{
        const productId = req.params.id;
        const products = await ProductModel.findByPk(productId);
        if(!product){
            return res
                .status(404)
                .json({ error: 'Product not found' });
        }
      res.status(200).json({ products });
    
    }catch(error){
        console.error(error);
        res
        .status(500)
        .json({error: 'Internal Server Error' })
    }
}

export const updateProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const { title, category, description, price, supplier } = req.body;
  
      const product = await ProductModel.findByPk(productId);
  
      if (!product) {
        return res
            .status(404)
            .json({ error: 'Product not found' });
      }
  
      
      if (product.userId !== req.user.id) {
        return res
          .status(403)
          .json({ error: 'Forbidden: You are not the product creator' });
      }
  
      await product.update({
        title,
        category,
        description,
        price,
        supplier,
      });
  
      res.status(200).json({ product });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Internal Server Error' });
    }
  };

  export const deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await ProductModel.findByPk(productId);
  
      if (!product) {
        return res
            .status(404)
            .json({ error: 'Product not found' });
      }
  
  
      if (product.userId !== req.user.id) {
        return res
          .status(403)
          .json({ error: 'Forbidden: You are not the product creator' });
      }
  
      await product.destroy();
  
      res.status(204).send(); 
    } catch (error) {
      console.error(error);
      res
      .status(500)
      .json({ error: 'Internal Server Error' });
    }
  };
  




