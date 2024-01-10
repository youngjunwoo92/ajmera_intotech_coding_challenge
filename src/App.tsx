import styled from '@emotion/styled';
import ProductList from './components/ProductList';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { useGetProduct } from './service/productService';
import ProductDetail from './components/ProductDetail';

export type BaseProps = {
  onClick: (id: number | null) => void;
  selectedId: number | null;
};

export default function App() {
  const [selectedId, setSelectedId] = useState<null | number>(null);

  // const { data, isLoading } = useGetProduct(selectedId);

  const handleClick = (id: number | null) => {
    // If clicked product that is displaying, wet selecetdId to null.
    if (id === selectedId) {
      return setSelectedId(null);
    }

    setSelectedId(id);
  };

  // if (isLoading) {
  //   return <h1>loading...</h1>;
  // }

  return (
    <Layout>
      <ProductList selectedId={selectedId} onClick={handleClick} />
      <main>
        {data ? (
          <ProductDetail product={data} />
        ) : (
          <EmptyContainer>
            <Typography gutterBottom className='sub-heading'>
              Nothing to display...
            </Typography>
            <Typography gutterBottom variant='h4' className='heading'>
              Select an item to display
            </Typography>
            <Typography variant='h4' className='content'>
              Select an item from the master view to display details in the
              detail view.
            </Typography>
          </EmptyContainer>
        )}
      </main>
    </Layout>
  );
}

const Layout = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  display: flex;

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    @media (max-width: 768px) {
      display: none;
      padding: 16px;
    }
  }
`;

const EmptyContainer = styled.div`
  .sub-heading {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 24px;
    color: #6941c6;
  }

  .heading {
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 44px;
    color: rgba(0, 0, 0, 87%);
  }

  .content {
    font-size: 2rem;
    line-height: 30px;
    color: rgba(0, 0, 0, 60%);
  }
`;

const data = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};
