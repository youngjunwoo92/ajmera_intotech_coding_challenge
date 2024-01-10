import { IconButton, Typography } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import styled from '@emotion/styled';

import { useGetProduct } from '../service/productService';
import ProductDetailRating from './ProductDetailRating';
import { formatUSD } from '../utilities/formatUSD';

type Props = {
  selectedId: number | null;
  onClose: () => void;
};

export default function ProductDetail({ selectedId, onClose }: Props) {
  const { data } = useGetProduct(selectedId);

  if (!data) {
    onClose();
    return null;
  }

  return (
    <Layout>
      <CloseButton onClick={onClose}>
        <WestIcon fontSize='large' />
      </CloseButton>
      <Container>
        <ImageContainer>
          <img src={data.image} />
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
          {data.category}
        </Typography>
        <Typography gutterBottom variant='h1' className='heading'>
          {data.title}
        </Typography>
        <Typography className='content'>{data.description}</Typography>
        <DetailFooter>
          <ProductDetailRating rating={data.rating} />
          <Typography fontSize={24} fontWeight={600}>
            {formatUSD(data.price)}
          </Typography>
        </DetailFooter>
      </DetailBody>
    </Layout>
  );
}

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

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

export const Container = styled.div`
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

  @media (max-width: 768px) {
    aspect-ratio: 1 / 1;
  }

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

const CloseButton = styled(IconButton)`
  display: none;
  position: absolute;
  background-color: white;
  transform: translate(50%, 50%);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 768px) {
    display: block;
  }
`;
