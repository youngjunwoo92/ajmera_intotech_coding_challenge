import ProductCardSkeleton from '../components/ProductCardSkeleton';
import { Container, Layout } from '../components/ProductList';

export default function ProductListFallback() {
  return (
    <Layout>
      <Container>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Container>
    </Layout>
  );
}
