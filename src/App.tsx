import { Suspense, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Dialog } from '@mui/material';
import styled from '@emotion/styled';

import ProductDetailFallback from './fallback/ProductDetailFallback';
import ProductListFallback from './fallback/ProductListFallback';
import ProductDetail from './components/ProductDetail';
import EmptyProduct from './components/EmptyProduct';
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
      ) : (
        <main>
          {selectedId === null ? (
            <EmptyProduct />
          ) : (
            <Suspense fallback={<ProductDetailFallback />}>
              <ProductDetail selectedId={selectedId} onClose={handleClose} />
            </Suspense>
          )}
        </main>
      )}
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
