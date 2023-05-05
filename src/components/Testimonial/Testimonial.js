import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review/Review';
import quote from '../../assets/icons/quote.svg';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviw: 'It is a long established fact that by thge readable content ',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'lusifer',
            reviw: 'It is a long established fact that by thge readable content ',
            location: 'Thailand',
            img: people2
        },
        {
            _id: 3,
            name: 'henry',
            reviw: 'It is a long established fact that by thge readable content ',
            location: 'China',
            img: people3
        },
    ]

    return (
        <div>
            <div className='flex justify-between m-10'>
                <div className='mb-12 mt-10'>
                    <h1 className='text-primary text-2xl font-bold mb-2'>Testimonial</h1>
                    <h1 className='text-5xl font-semibold text-black'>What Our Patient Says </h1>
                </div>
                <div>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;