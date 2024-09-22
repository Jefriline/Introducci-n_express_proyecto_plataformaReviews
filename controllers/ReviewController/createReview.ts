import { Request, Response } from "express";
import Review from '../../Dto/ReviewDto/reviewDto';
import reviewService from '../../services/ReviewService/reviewServices';


let createReview = async (req: Request, res: Response) => {
    try {
        const {
            rating,
            comment
        } = req.body;

        const created = await reviewService.add(new Review(rating, comment));


        return res.status(201).json(
            { status: 'Opinión creada' }
        );
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}

export default createReview;