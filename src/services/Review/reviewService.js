import { getRequest, deleteRequest, putRequest } from "../Requests/requestService";


class ReviewService {
    getReviewsByGame(gameId, onSuccess, onError) {
        getRequest(
            '/reviews',
            { gameId },
            onSuccess,
            onError);
    }

    deleteReview(reviewId, onSuccess, onError, header) {
        console.log("reviewId", reviewId); 
        deleteRequest(
            `/reviews/${reviewId}`, 
            onSuccess, 
            onError, 
            header); 
    }

    updateReview(score, text, reviewId, onSuccess, onError, header){
        putRequest(
            `/reviews/${reviewId}`, 
            {score, text}, 
            onSuccess, 
            onError, 
            header); 
    }

}

export default new ReviewService();