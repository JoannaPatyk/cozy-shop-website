import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
    return (
        <Wrapper>
            <div className="section-center">
                <h4>
                    <Link to="/">Home</Link>
                    {product && <Link to="/products">/ Products</Link>}/ {title}
                </h4>
            </div>
        </Wrapper>
    );
};

PageHero.propTypes = {
    title: PropTypes.string,
    product: PropTypes.any
};

const Wrapper = styled.section`
    background: var(--clr-primary-10);
    width: 100%;
    min-height: 18vh;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    color: var(--clr-primary-1);

    h4 {
        text-transform: uppercase;
        font-weight: 500;
    }

    a {
        color: var(--clr-primary-3);
        padding: 0.5rem;
        transition: var(--transition);
    }

    a:hover {
        color: var(--clr-primary-1);
    }
`;

export default PageHero;
