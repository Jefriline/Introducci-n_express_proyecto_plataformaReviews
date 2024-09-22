import { Request, Response } from "express";
import Product from '../../Dto/ProductDto/productDto';
import idProduct from '../../Dto/ProductDto/idProductDto';
import productService from "../../services/ProductService/productService";


let updateProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description, category } = req.body;

    const [updated]: any = await productService.update(new idProduct(id), new Product(name, description, category));


    if (updated.affectedRows > 0) {
      return res.status(200).json({ status: 'Producto actualizado' });
    } else {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export default updateProduct;
