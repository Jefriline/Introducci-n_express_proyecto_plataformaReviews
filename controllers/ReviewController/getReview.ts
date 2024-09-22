import { Request, Response } from "express";
import idReview from '../../Dto/ReviewDto/idReviewDto';
import reviewService from '../../services/ReviewService/reviewServices';

let getReview = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const review = await reviewService.get(new idReview(id));

    if (Array.isArray(review) && review.length > 0) {
      return res.status(200).json(review);
    } else {
      return res.status(404).json({ error: 'comentario no encontrado' });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

export default getReview;