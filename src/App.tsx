import { Suspense, useState } from 'react';
import { Dialog, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled';

import ProductDetailFallback from './fallback/ProductDetailFallback';
import ProductListFallback from './fallback/ProductListFallback';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

export type BaseProps = {
  onClick: (id: number | null) => void;
  selectedId: number | null;
};

export default function App() {
  const [selectedId, setSelectedId] = useState<null | number>(null);
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  const handleClick = (id: number | null) => {
    // If clicked product that is displaying, wet selecetdId to null.
    if (id === selectedId) {
      return setSelectedId(null);
    }

    setSelectedId(id);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <Layout>
      <Suspense fallback={<ProductListFallback />}>
        <ProductList selectedId={selectedId} onClick={handleClick} />
      </Suspense>
      <main>
        {isMobile ? (
          <Dialog
            fullScreen
            open={selectedId !== null}
            onClose={handleClose}
            PaperProps={{ style: { padding: '16px' } }}
          >
            <Suspense fallback={<ProductDetailFallback />}>
              <ProductDetail selectedId={selectedId} onClose={handleClose} />
            </Suspense>
          </Dialog>
        ) : selectedId !== null ? (
          <Suspense fallback={<ProductDetailFallback />}>
            <ProductDetail selectedId={selectedId} onClose={handleClose} />
          </Suspense>
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
  position: relative;
  max-width: 1920px;
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  display: flex;

  @media (max-width: 768px) {
  }

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
    }
  }
`;

const EmptyContainer = styled.div`
  text-align: center;
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

// const data = {
//   id: 1,
//   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
//   price: 109.95,
//   description:
//     'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
//   category: "men's clothing",
//   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//   rating: {
//     rate: 3.9,
//     count: 120,
//   },
// };
