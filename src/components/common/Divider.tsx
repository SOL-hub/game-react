import styled from 'styled-components';
import { GrayBox } from './Layout';

export const Divider2 = styled(GrayBox)`
  height: 0.125rem;
  margin: 0.75rem 0;
  background-color: ${(props) => props.theme.color.blackSalon100};
`;

export const Divider4 = styled(GrayBox)`
  height: 0.25rem;
  margin: 1.5rem 0;
`;

export const Divider16 = styled(Divider4)`
  height: 1rem;
`;

export const Divider32 = styled(GrayBox)`
  height: 2rem;
  margin: 2rem 0;
`;
