import { css } from '@emotion/react';

import BSTop from './BSTop';
import styled from 'styled-components';

interface BSCardProps {
  title: string;
  subTitle: string;
}

function BSCard({ title, subTitle }: BSCardProps) {
  return (
    <Container>
      <BSTop subTitle="" title={''} />
    </Container>
  );
}

const containerStyles = css`
  padding: 18px 52px;
  border-radius: 16px;
  text-align: center;
`;

const Container = styled.div``;

export default BSCard;
