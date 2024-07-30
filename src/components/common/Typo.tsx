import styled from 'styled-components';

interface TypoStyle {
  margin?: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  textOverflow?: string;
  textAlign?: string;
}

export const HeadRegular = styled.div<TypoStyle>`
  margin: ${(props) => props.margin};
  color: ${(props) =>
    props.theme.color[props.color as keyof typeof props.theme.color] ||
    props.theme.color.blackSalon600};
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  line-height: ${(props) => props.lineHeight};
  letter-spacing: -0.3px;
  text-overflow: ${(props) => props.textOverflow};
  text-align: ${(props) => props.textAlign};
`;

export const HeadRegular20 = styled(HeadRegular)`
  font-size: 1.25rem;
`;

export const HeadRegular18 = styled(HeadRegular)`
  font-size: 1.125rem;
`;

export const HeadBold = styled(HeadRegular)`
  font-weight: 700;
  letter-spacing: 0px;
`;

export const HeadBold20 = styled(HeadBold)`
  font-size: 1.25rem;
`;

export const HeadBold18 = styled(HeadBold)`
  font-size: 1.125rem;
`;

export const TextRegular16 = styled(HeadRegular)`
  font-size: 1rem;
`;

export const TextRegular14 = styled(HeadRegular)`
  font-size: 0.875rem;
`;

export const TextBold16 = styled(HeadBold)`
  font-size: 1rem;
`;

export const TextBold14 = styled(HeadBold)`
  font-size: 0.875rem;
`;

export const CaptionRegular12 = styled(HeadRegular)`
  font-size: 0.75rem;
`;

export const BodyRegular16 = styled(HeadRegular)`
  font-size: 1rem;
  line-height: 150%;
`;

export const BodyRegular15 = styled(HeadRegular)`
  font-size: 0.938rem;
  line-height: 145%;
`;

export const BodyRegular14 = styled(HeadRegular)`
  font-size: 0.875rem;
  line-height: 140%;
`;
