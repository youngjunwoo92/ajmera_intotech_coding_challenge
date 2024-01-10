import { Skeleton } from '@mui/material';
import styled from '@emotion/styled';

import { Container, Layout } from '../components/ProductDetail';

export default function ProductDetailFallback() {
  return (
    <Layout>
      <Container>
        <ImageContainer>
          <Skeleton variant='rectangular' height='100%' />
        </ImageContainer>
        <DetailBody>
          <Skeleton animation='wave' width='25%' height={32} />
          <Skeleton animation='wave' width='100%' height={32} />
          <Skeleton animation='wave' width='100%' height={32} />
          <Skeleton animation='wave' width='100%' height={32} />
          <Skeleton animation='wave' width='33.33%' height={32} />
        </DetailBody>
        <DetailFooter>
          <Skeleton animation='wave' width='25%' height={40} />
          <Skeleton animation='wave' width='33.33%' height={40} />
        </DetailFooter>
      </Container>
    </Layout>
  );
}

const ImageContainer = styled.div`
  aspect-ratio: 16 / 10;
  width: 100%;
`;

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 0;
`;

const DetailFooter = styled.div`
  margin-top: 24px;
`;
