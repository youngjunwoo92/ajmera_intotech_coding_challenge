import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export default function EmptyProduct() {
  return (
    <EmptyContainer>
      <Typography gutterBottom color='primary' className='sub-heading'>
        Nothing to display...
      </Typography>
      <Typography
        gutterBottom
        variant='h4'
        className='heading'
        color='text.primary'
      >
        Select an item to display
      </Typography>
      <Typography variant='h4' className='content' color='text.secondary'>
        Select an item from the master view to display details in the detail
        view.
      </Typography>
    </EmptyContainer>
  );
}
const EmptyContainer = styled.div`
  text-align: center;
  .sub-heading {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 24px;
  }

  .heading {
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 44px;
  }

  .content {
    font-size: 2rem;
    line-height: 30px;
  }
`;
