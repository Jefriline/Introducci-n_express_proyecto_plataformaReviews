import db from '../../config/config-db';
import Product from '../../Dto/ProductDto/productDto';
import idProduct from '../../Dto/ProductDto/idProductDto';

class ProductRepository {
    static async add(product: Product) {
        const sql = 'INSERT INTO product (name, description, category) VALUES (?, ?, ?)';
        const values = [product.name, product.description, product.category];
        return db.execute(sql, values);
    }

    static async get(id: idProduct) {
        const sql = 'SELECT * FROM product WHERE id = ?'
        const values = [id.id];
        const row = await db.execute(sql, values);
        return row[0];
    }

    static async update(id: idProduct, product: Product) {
        const sql = 'UPDATE product SET name = ?, description = ?, category = ? WHERE id = ?';
        const values = [product.name, product.description, product.category, id.id];
        return db.execute(sql, values);
    }

    static async delete(id: idProduct) {
        const sql = 'DELETE FROM product WHERE id = ?';
        const values = [id.id];
        return db.execute(sql, values);
    }
}

export default ProductRepository;
