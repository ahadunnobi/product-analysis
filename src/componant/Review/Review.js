import React from 'react';
import useReview from '../../Hook/useReview';
import Reviewdata from '../Reviewdata/Reviewdata';

const Review = () => {
        const[Review] = useReview();
        return (
                <div className='flex flex-row flex-wrap gap-24 justify-center bg-slate-400'>
                         {
                                Review.map(Review => <Reviewdata key={Review.id} Review={Review}></Reviewdata>)
                        }
                </div>
        );
};

export default Review;