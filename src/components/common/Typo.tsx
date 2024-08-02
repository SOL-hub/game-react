import styled from 'styled-components';

interface TypoStyle {
  margin?: string;
  size?: 12 | 14 | 15 | 16 | 18 | 20;
  color?: string;
  lineHeight?: string;
  textOverflow?: string;
  textAlign?: string;
  bold?: boolean;
}

export const Text = styled.div<TypoStyle>`
  {...style}
  margin: ${(props) => props.margin};
  color: ${(props) =>
    props.theme.color[props.color as keyof typeof props.theme.color] ||
    props.theme.color.blackSalon600};
 font-size: ${(props) => props.theme.fontSize[props.size as keyof typeof props.theme.fontSize]};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  line-height: ${(props) => props.lineHeight};
 letter-spacing: ${({ bold }) => (bold ? 0 : '-0.3px')};
  text-overflow: ${(props) => props.textOverflow};
  text-align: ${(props) => props.textAlign};
`;

export const HeadRegular20 = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize[20]};
`;

export const HeadRegular18 = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize[18]};
`;

export const HeadBold = styled(Text)`
  font-weight: 700;
  letter-spacing: 0px;
`;

export const HeadBold20 = styled(HeadBold)`
  font-size: ${({ theme }) => theme.fontSize[20]};
`;

export const HeadBold18 = styled(HeadBold)`
  font-size: ${({ theme }) => theme.fontSize[18]};
`;

export const TextRegular16 = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize[16]};
`;

export const TextRegular14 = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize[14]};
`;

export const TextBold16 = styled(HeadBold)`
  font-size: ${({ theme }) => theme.fontSize[16]};
`;

export const TextBold14 = styled(HeadBold)`
  font-size: ${({ theme }) => theme.fontSize[14]};
`;

export const CaptionRegular12 = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize[12]};
`;

export const BodyRegular16 = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize[16]};
  line-height: 150%;
`;

export const BodyRegular15 = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize[15]};
  line-height: 145%;
`;

export const BodyRegular14 = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize[14]};
  line-height: 140%;
`;
