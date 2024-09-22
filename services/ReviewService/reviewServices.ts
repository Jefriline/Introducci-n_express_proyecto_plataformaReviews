import review from '../../Dto/ReviewDto/reviewDto';
import idReview from '../../Dto/ReviewDto/idReviewDto';
import ReviewRepository from '../../repositories/ReviewRepository/reviewRepository';

class reviewService {
    
    static async add(rev: review) {
        return await ReviewRepository.add(rev)
    }

    static async get(id: idReview) {
        return await ReviewRepository.get(id)
    }
}

export default reviewService;