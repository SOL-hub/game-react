import React from 'react';
import styled from 'styled-components';
import { Row } from './Layout';
import { TextRegular14 } from './Typo';

interface ChipProps {
  margin?: string;
  selected?: boolean;
  children?: React.ReactNode;
}

export const TextChip = ({ margin = '0', selected, children }: ChipProps) => {
  return (
    <ChipBox>
      <TextRegular14>{children}</TextRegular14>
    </ChipBox>
  );
};

const ChipBox = styled(Row)`
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
`;
