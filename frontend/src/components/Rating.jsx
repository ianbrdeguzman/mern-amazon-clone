import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ rating, reviews }) => {
    return (
        <div className='flex items-center text-warning'>
            <span>
                {rating >= 1 ? (
                    <BsStarFill />
                ) : rating >= 0.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <span>
                {rating >= 2 ? (
                    <BsStarFill />
                ) : rating >= 1.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <span>
                {rating >= 3 ? (
                    <BsStarFill />
                ) : rating >= 2.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <span>
                {rating >= 4 ? (
                    <BsStarFill />
                ) : rating >= 3.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
            <span>
                {rating >= 5 ? (
                    <BsStarFill />
                ) : rating >= 4.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
        </div>
    );
};

export default Rating;
