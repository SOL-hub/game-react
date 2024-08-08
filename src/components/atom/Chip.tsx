import React from 'react';
import styled from 'styled-components';
import { TextRegular14 } from './Typo';
import { Flex } from './Layout';

interface ChipProps {
  margin?: string;
  selected?: boolean;
  outline?: boolean;
  children?: React.ReactNode;
}

export const TextChip = ({ margin = '0', selected = false, children }: ChipProps) => {
  return (
    <ChipBox margin={margin} selected={selected}>
      <TextRegular14>{children}</TextRegular14>
    </ChipBox>
  );
};

export const OutlineChip = ({ margin = '0', selected = false, children }: ChipProps) => {
  return (
    <ChipBox margin={margin} selected={selected} outline>
      <TextRegular14 color={`black${selected ? 0 : 100}`}>{children}</TextRegular14>
    </ChipBox>
  );
};

const ChipBox = styled(Flex)<ChipProps>`
  justify-content: center;
  padding: ${({ outline }) => (outline ? '0.75rem 1rem' : '0.5rem 0.75rem')};
  background: ${({ theme, selected, outline }) =>
    theme.color[selected ? (outline ? 'red500' : 'black50') : 'black0']};
  border: ${({ outline }) => (outline ? '1px' : 0)} solid
    ${({ theme, selected }) => theme.color[selected ? 'red500' : 'black100']};
  border-radius: ${({ outline }) => (outline ? '1.5rem' : '1rem')};
`;
