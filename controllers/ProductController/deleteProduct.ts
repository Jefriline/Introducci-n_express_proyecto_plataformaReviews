import { Request, Response } from "express";
import idProduct from '../../Dto/ProductDto/idProductDto';
import productService from "../../services/ProductService/productService";

let deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const [deleted]: any = await productService.delete(new idProduct(id));


    if (deleted.affectedRows > 0) {
      return res.status(200).json({ status: 'Producto eliminado' });
    } else {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export default deleteProduct;