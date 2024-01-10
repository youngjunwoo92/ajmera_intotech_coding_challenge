import StarRateIcon from '@mui/icons-material/StarRate';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import { Rating as RatingType } from '../type/product.type';
type Props = {
  rating: RatingType;
};

export default function ProductRating({ rating }: Props) {
  return (
    <Container>
      <StarRateIcon
        fontSize='medium'
        style={{ color: '#FDB022', width: 12, height: 12 }}
      />
      <Typography fontSize='1.4rem'>{rating.rate}</Typography>
      <Typography fontSize='1.4rem'>({rating.count})</Typography>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: #fff;
  bottom: 8px;
  gap: 4px;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 2px 8px;
  border: 1px solid #eaecf0;
  border-radius: 16px;
`;
