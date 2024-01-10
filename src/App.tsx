import styled from '@emotion/styled';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <Layout>
      <ProductList />
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
