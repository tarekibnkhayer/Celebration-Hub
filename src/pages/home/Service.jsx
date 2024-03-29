import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {id, name, image, price, short_description} = service;
    return (
        <div className='border rounded-lg p-2 '>
            <img src={image} alt=""  className='h-96 w-full'/>
            <div className='my-4 space-y-2'>
            <p className='text-2xl font-bold'>{name} event</p>
            <p className='text-xl'>Price of the service: <span className='font-semibold'>Only {price}</span></p>
            <p className='text-lg italic'>{short_description}</p>
            </div>
            <Link to={`/services/${id}`}><button className='w-full bg-green-500 text-white p-3 rounded-xl'>See Details</button></Link>
        </div>
    );
};

export default Service;
Service.propTypes = {
    service: PropTypes.object.isRequired
}