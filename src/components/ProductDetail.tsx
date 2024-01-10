import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import ProductDetailRating from './ProductDetailRating';
import { formatUSD } from '../utilities/formatUSD';
import { Product } from '../type/product.type';

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  return (
    <Layout>
      <Container>
        <ImageContainer>
          <img src={product.image} />
        </ImageContainer>
      </Container>
      <DetailBody>
        <Typography
          gutterBottom
          fontSize={14}
          fontWeight={600}
          className='sub-heading'
          color='primary'
        >
          {product.category}
        </Typography>
        <Typography gutterBottom variant='h1' className='heading'>
          {product.title}
        </Typography>
        <Typography className='content'>{product.description}</Typography>
        <DetailFooter>
          <ProductDetailRating rating={product.rating} />
          <Typography fontSize={24} fontWeight={600}>
            {formatUSD(product.price)}
          </Typography>
        </DetailFooter>
      </DetailBody>
    </Layout>
  );
}

const Layout = styled.div`
  height: 100%;
  width: 100%;

  .sub-heading {
    line-height: 20px;
    text-transform: capitalize;
  }

  .heading {
    font-weight: 500;
    font-size: 3rem;
    line-height: 38px;
    color: rgba(0, 0, 0, 87%);
  }

  .content {
    font-size: 1.6rem;
    line-height: 24px;
    color: rgba(0, 0, 0, 60%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  aspect-ratio: 16 / 10;
  width: 100%;
  height: auto;
  background-color: #f4f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  & > img {
    aspect-ratio: 1 / 1;
    object-fit: contain;
    mix-blend-mode: multiply;
    width: 50%;
  }
`;

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 0;
`;

const DetailFooter = styled.div`
  margin-top: 24px;
`;
