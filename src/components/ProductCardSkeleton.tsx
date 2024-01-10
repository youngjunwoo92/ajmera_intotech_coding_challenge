import styled from '@emotion/styled';
import { Card, Skeleton } from '@mui/material';

export default function ProductCardSkeleton() {
  return (
    <StyledCard elevation={0}>
      <div>
        <Skeleton
          animation='wave'
          variant='rectangular'
          width='100%'
          height='100%'
        />
      </div>
      <div>
        <Skeleton
          animation='wave'
          style={{ width: '33.33%', height: '24px' }}
        />
        <Skeleton animation='wave' style={{ width: '100%', height: '24px' }} />
        <Skeleton animation='wave' style={{ width: '100%', height: '24px' }} />
        <Skeleton
          animation='wave'
          style={{ width: '50%', height: '24px', marginTop: 'auto' }}
        />
      </div>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  display: flex;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid #eaecf0;
  overflow: hidden;
  padding: 16px;
  width: 100%;
  aspect-ratio: 5 / 3;

  & > div:first-of-type {
    aspect-ratio: 3 / 4;
    border-radius: 8px;
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
