import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

    const {_id ,title,description,image,price,teacher} = course ;
    return (
        <div className="card card-compact bg-[#FDF6EA] p-4  border-spacing-2 border-gray-950 border w-80 shadow-xl transition-transform duration-300 hover:scale-105">
            <figure>
                <img className='w-80'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <Link to={`/class/${_id}`}>
            <button className="btn bg-[#D08345]  px-6 rounded-3xl">View Details</button>
          </Link>
            </div>
        </div>
    );
};

export default CourseCard;