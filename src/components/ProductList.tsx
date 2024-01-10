import styled from '@emotion/styled';

import { useGetProducts } from '../service/productService';
import ProductCard from './ProductCard';
import { BaseProps } from '../App';

export default function ProductList({ onClick, selectedId }: BaseProps) {
  const { data } = useGetProducts();

  return (
    <Layout>
      <Container>
        {(data ?? []).map((product) => (
          <ProductCard
            selectedId={selectedId}
            onClick={onClick}
            key={product.id}
            product={product}
          />
        ))}
      </Container>
    </Layout>
  );
}

export const Layout = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 32px;
  max-width: 512px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 16px;
    flex-grow: 1;
    max-width: unset;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
  }
`;
