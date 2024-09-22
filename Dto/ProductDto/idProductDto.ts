class idProduct {
    private _id: number;

    constructor(id: number) {
        this._id = id;
    }

    // Getter
    get id(): number {
        return this._id;
    }

    // Setter
    set id(id: number) {
        this._id = id;
    }
}

export default idProduct;


