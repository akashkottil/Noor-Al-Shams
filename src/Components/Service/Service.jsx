import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import catus from '../../assets/img/plants/Western.png';
import cannabis from '../../assets/img/plants/Cannabis.png';
import irrigation from '../../assets/img/plants/Irrigation.png';
import plant from '../../assets/img/plants/Plant.png';
import potted from '../../assets/img/plants/Potted.png';
import Mature_1 from '../../assets/img/services/Mature_3.jpg'
import Mature_2 from '../../assets/img/services/Mature_2.jpg'
import Mature_3 from '../../assets/img/services/Mature_1.jpg'
import Stone_1 from '../../assets/img/services/Stone_1.jpg'
import Stone_2 from '../../assets/img/services/Stone_2.jpg'
import Stone_3 from '../../assets/img/services/Stone_3.jpg'
import Soil_1 from '../../assets/img/services/Soil_1.jpg'
import Soil_2 from '../../assets/img/services/Soil_2.jpg'
import Soil_3 from '../../assets/img/services/Soil_3.jpg'
import Plants_1 from '../../assets/img/services/Plants_1.jpg'
import Plants_2 from '../../assets/img/services/Plants_2.jpg'
import Plants_3 from '../../assets/img/services/Plants_3.jpg'
import Pots_1 from '../../assets/img/services/Pots_1.jpg'
import Pots_2 from '../../assets/img/services/Pots_2.jpg'
import Pots_3 from '../../assets/img/services/Pots_3.jpg'




const Service = () => {
    const [selectedPlant, setSelectedPlant] = useState(null);

    const plantsData = [
        {
            img: catus,
            heading: "Pebbles & Stones",
            para: "Elevate your garden with decorative stones for effortless beauty.",
            examples: [Stone_1, Stone_2, Stone_3]
        },
        {
            img: cannabis,
            heading: "Soil Amendments",
            para: "Improve your garden with natural soil helpers.",
            examples: [Soil_1, Soil_2, Soil_3]
        },
        {
            img: irrigation,
            heading: "Plants (Indoor)",
            para: "Enhance your living space with the natural beauty and fresh air provided by indoor plants.",
            examples: [Plants_1, Plants_2, Plants_3]
        },
        {
            img: plant,
            heading: "Mature Specimen Plants",
            para: "Quickly upgrade your garden with mature plants.",
            examples: [Mature_1, Mature_2, Mature_3]
        },
        {
            img: potted,
            heading: "Plant Pots",
            para: "Get stylish and useful pots for your plants.",
            examples: [Pots_1, Pots_2, Pots_3]
        },
    ];

    return (
        <div>
            <Element id='service'>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='font-bold text-green-700'>OUR SERVICES</h3>
                    <h1 className='text-2xl font-bold text-center'>Nursery & Landscaping Services</h1>
                </div>
                <div className='flex flex-wrap px-8 py-10 gap-5 justify-center'>
                    {plantsData.map((data, index) => (
                        <div key={index} className='w-full lg:w-1/3'>
                            <div
                                className='flex w-full h-auto bg-white shadow-2xl rounded-2xl items-center px-5 py-5 gap-5 cursor-pointer'
                                onClick={() => setSelectedPlant(selectedPlant === index ? null : index)}
                            >
                                <div>
                                    <img src={data.img} alt={data.heading} className='object-cover w-14 h-12' />
                                </div>
                                <div>
                                    <h1 className='font-bold text-green-700'>{data.heading}</h1>
                                    <p className='text-sm'>{data.para}</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faChevronDown} className='expand-icon' />
                                </div>
                            </div>
                            {selectedPlant === index && (
                                <div className='flex flex-wrap justify-center mt-5 gap-5'>
                                    {data.examples.map((example, idx) => (
                                        <div key={idx} className='flex w-full lg:w-1/3 h-40 bg-gray-200 shadow-md rounded-md items-center justify-center'>
                                            <img src={example} alt={`Example ${idx + 1}`} className='object-cover w-full h-full rounded-md' />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Element>
        </div>
    );
};

export default Service;
