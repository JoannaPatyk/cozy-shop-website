import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import styled from 'styled-components';

const Sort = () => {
    const { filtered_products: products, grid_view, setGridView, setListView, sort, updateSort } = useFilterContext();

    return (
        <Wrapper>
            <div className="btn-container">
                <button type="button" className={`${grid_view ? 'active' : null}`} onClick={setGridView}>
                    <BsFillGridFill />
                </button>
                <button type="button" className={`${grid_view ? null : 'active'}`} onClick={setListView}>
                    <BsList />
                </button>
            </div>
            <p>{products.length} products found</p>
            <hr />
            <form>
                <label htmlFor="sort">sort by: </label>
                <select name="sort" id="sort" className="sort-input" value={sort} onChange={updateSort}>
                    <option value="price-lowest">lowest price</option>
                    <option value="price-highest">highest price</option>
                    <option value="name-a">name a-z</option>
                    <option value="name-z">name z-a</option>
                </select>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    margin-bottom: 2rem;
    column-gap: 2rem;

    @media (max-width: 576px) {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 0.75rem;

        .btn-container {
            width: 50px;
        }

        label {
            display: inline-block;
            margin-right: 0.5rem;
        }
    }

    @media (min-width: 768px) {
        column-gap: 2rem;
    }

    p {
        margin-bottom: 0;
        color: var(--clr-primary-1);
    }

    .btn-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 0.5rem;

        button {
            background: transparent;
            border: 1px solid var(--clr-primary-1);
            color: var(--clr-black);
            width: 1.5rem;
            border-radius: var(--radius);
            height: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            svg {
                font-size: 1rem;
            }
        }

        .active {
            background: var(--clr-primary-1);
            color: var(--clr-white);
        }
    }

    .sort-input {
        border-color: transparent;
        border-radius: 0.15em;
        font-size: 0.9rem;
        font-weight: 300;
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        font-family: 'Nunito', sans-serif;
        background-color: var(--clr-primary-10);
        outline: none;
    }

    label {
        font-size: 1rem;
    }
`;

export default Sort;
