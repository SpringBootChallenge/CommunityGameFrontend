import React, { useEffect, useState } from 'react';
import reviewService from '../../../services/Review/reviewService';
import Review from '../Review/Review';

function ReviewList({ gameId }) {
    return (
        <div className='card p-5'>
            <div className="row mb-4">
                <div className="col d-flex justify-content-between">
                    <h2>Reviews</h2>
                    <button className='btn btn-primary'>Add Review</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                </div>
            </div>
        </div>
    )
}


export default ReviewList
