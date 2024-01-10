import { Rating, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Rate } from '../type/product.type';

type Props = {
  rating: Rate;
};

export default function ProductDetailRating({ rating }: Props) {
  const { rate, count } = rating;
  return (
    <Container>
      <Rating value={rate} size='large' readOnly />
      <Typography fontSize={16}>{rate.toFixed(1)}</Typography>
      <Typography fontSize={16} color='text.secondary'>
        {count} Reviews
      </Typography>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 8px;
`;
