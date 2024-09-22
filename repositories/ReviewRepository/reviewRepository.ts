import db from '../../config/config-db';
import Review from '../../Dto/ReviewDto/reviewDto';
import idReview from '../../Dto/ReviewDto/idReviewDto';

class ReviewRepository {
    static async add(review: Review) {
        const sql = 'INSERT INTO reviews (rating, comment) VALUES (?, ?)';
        const values = [review.rating, review.comment];
        return db.execute(sql, values);
    }

    static async get(id: idReview) {
        const sql = 'SELECT * FROM reviews WHERE id = ?';
        const values = [id.id];
        const row = await db.execute(sql, values);
        return row[0];
    }
}

export default ReviewRepository;
