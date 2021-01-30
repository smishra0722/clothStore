import React from 'react';
import './homepage.styles.scss';


//Component import
import {Carousel} from '../../components/carousel/carousel.component';


export const Homepage = () => (
    <div className='homepage'>
        <Carousel />
    </div>
);