import React from 'react';
import { MdOutlineVolunteerActivism, MdLocalMovies, MdDiversity1 } from 'react-icons/md';

export const links = [
    {
        id: 1,
        text: 'home',
        url: '/'
    },
    {
        id: 2,
        text: 'about us',
        url: '/about'
    },
    {
        id: 3,
        text: 'products',
        url: '/products'
    }
];

export const services = [
    {
        id: 1,
        icon: <MdOutlineVolunteerActivism />,
        title: 'mission',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi.'
    },
    {
        id: 2,
        icon: <MdDiversity1 />,
        title: 'vision',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi.'
    },
    {
        id: 3,
        icon: <MdLocalMovies />,
        title: 'history',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi.'
    }
];

export const products_url = 'https://course-api.com/react-store-products';
export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
