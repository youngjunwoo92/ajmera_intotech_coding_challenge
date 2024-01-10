import styled from '@emotion/styled';
import ProductList from './components/ProductList';
import { useState } from 'react';

export type BaseProps = {
  onClick: (id: number | null) => void;
  selectedId: number | null;
};

export default function App() {
  const [selectedId, setSelectedId] = useState<null | number>(null);

  console.log(selectedId);

  const handleClick = (id: number | null) => {
    // If clicked product that is displaying, wet selecetdId to null.
    if (id === selectedId) {
      return setSelectedId(null);
    }

    setSelectedId(id);
  };

  return (
    <Layout>
      <ProductList selectedId={selectedId} onClick={handleClick} />
      <main>Product Detail</main>
    </Layout>
  );
}

const Layout = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  display: flex;

  main {
    background-color: salmon;
    height: 100%;
    flex-grow: 1;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
