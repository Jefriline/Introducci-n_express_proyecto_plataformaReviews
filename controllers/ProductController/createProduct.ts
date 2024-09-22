import { Request, Response } from "express";
import Product from '../../Dto/ProductDto/productDto';
import productService from "../../services/ProductService/productService";

let createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, category } = req.body;

    const created = await productService.add(new Product(name, description, category));

    return res.status(201).json({ status: 'Producto creado' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export default createProduct;