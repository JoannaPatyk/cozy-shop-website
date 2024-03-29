import React from 'react';
import styled from 'styled-components';

const CartColumns = () => {
    return (
        <Wrapper>
            <div className="content">
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: none;

    @media (min-width: 776px) {
        display: block;

        .content {
            display: grid;
            grid-template-columns: 316px 1fr 1fr 1fr auto;
            justify-items: center;
            column-gap: 1rem;

            h5 {
                color: var(--clr-primary-1);
                font-weight: 400;
                text-transform: uppercase;
                font-family: 'Kranky', cursive;
            }
        }

        span {
            width: 2rem;
            height: 2rem;
        }

        hr {
            margin-top: 1rem;
            margin-bottom: 3rem;
        }
    }
`;

export default CartColumns;
