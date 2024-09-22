import { Request, Response } from "express";
import idProduct from '../../Dto/ProductDto/idProductDto';
import productService from "../../services/ProductService/productService";


let getProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const product = await productService.get(new idProduct(id));
    

    if (Array.isArray(product) && product.length > 0) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

export default getProduct;
