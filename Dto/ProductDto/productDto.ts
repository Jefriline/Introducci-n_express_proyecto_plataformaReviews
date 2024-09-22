class Product {
    private _name: string;
    private _description: string;
    private _category: string;

    constructor(name: string, description: string, category: string, id?: number) {
        this._name = name;
        this._description = description;
        this._category = category;
        
    }

    // Getters


    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get category(): string {
        return this._category;
    }

    // Setters
    

    set name(name: string) {
        this._name = name;
    }

    set description(description: string) {
        this._description = description;
    }

    set category(category: string) {
        this._category = category;
    }
}

export default Product;


