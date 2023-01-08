import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    produsts_error: error,
    featured_products: featured
  } = useProductsContext();

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className="section-center featured">
        {featured.slice(3, 6).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/products' className='btn'>all products</Link>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  h2 {
    font-weight: 500;
    padding-top: 2rem;
  }

  .featured {
    margin: 3rem auto;
    padding-bottom: .5rem;
    display: grid;
    gap: 2rem;
    img {
      height: 225px;
    }
  }

  .btn {
    display: block;
    width: 200px;
    margin: 2rem auto;
    padding-bottom: .5rem;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
`

export default FeaturedProducts;
