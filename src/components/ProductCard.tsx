import { Card, Typography } from '@mui/material';
import styled from '@emotion/styled';

import { formatUSD } from '../utilities/formatUSD';
import { Product } from '../type/product.type';
import ProductRating from './ProductRating';
import { BaseProps } from '../App';

type StyledCardProps = {
  selected: boolean;
};

interface Props extends BaseProps {
  product: Product;
}

export default function ProductCard({ product, onClick, selectedId }: Props) {
  return (
    <StyledCard
      selected={selectedId === product.id}
      elevation={0}
      onClick={() => onClick(product.id)}
    >
      <CardImageContainer>
        <img src={product.image} alt={product.title} />
        <ProductRating rating={product.rating} />
      </CardImageContainer>
      <CardBody>
        <div>
          <Typography variant='caption' color='primary' gutterBottom>
            {product.category}
          </Typography>
          <Typography variant='h1' gutterBottom>
            {product.title}
          </Typography>
          <Typography color='text.secondary'>{product.description}</Typography>
        </div>
        <div>
          <Typography variant='h2'>{formatUSD(product.price)}</Typography>
        </div>
      </CardBody>
    </StyledCard>
  );
}

const StyledCard = styled(Card)<StyledCardProps>`
  display: flex;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid ${(props) => (props.selected ? '#6941c6' : '#eaecf0')};
  overflow: hidden;
  padding: 16px;
  cursor: pointer;
  transition: border 150ms ease-in;
  width: 100%;

  &:hover {
    border-color: #6941c6;
  }
`;

const CardImageContainer = styled.div`
  aspect-ratio: 3 / 4;
  background-color: #f4f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;

  & > img {
    aspect-ratio: 1 / 1;
    object-fit: contain;
    mix-blend-mode: multiply;
    width: 90%;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 20px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 30px;
  }

  h1 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 28px;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1.8rem;
    line-height: 24px;
  }
`;
