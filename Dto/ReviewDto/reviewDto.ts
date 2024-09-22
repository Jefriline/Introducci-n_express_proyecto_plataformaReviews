class Review {
    private _rating: number;
    private _comment: string;

    constructor(rating: number, comment: string) {
        this._rating = rating;
        this._comment = comment;
    }

    // Getters
    get rating(): number {
        return this._rating;
    }

    get comment(): string {
        return this._comment;
    }

    // Setters
    set rating(rating: number) {
        this._rating = rating;
    }

    set comment(comment: string) {
        this._comment = comment;
    }
}

export default Review;
