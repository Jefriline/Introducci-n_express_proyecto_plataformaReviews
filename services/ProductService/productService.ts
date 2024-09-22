import Product from "../../Dto/ProductDto/productDto";
import idProduct from '../../Dto/ProductDto/idProductDto';
import ProductRepository from "../../repositories/ProductRepository/productRepository";

class productService {
    
    static async add(reg: Product) {
        return await ProductRepository.add(reg)
    }

    static async get(id: idProduct) {
        return await ProductRepository.get(id)
    }

    static async update(id: idProduct, up: Product) {
        return await ProductRepository.update(id,up)
    }

    static async delete(id: idProduct) {
        return await ProductRepository.delete(id)
    }
}

export default productService;
