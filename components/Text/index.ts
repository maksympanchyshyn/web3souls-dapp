import styled, { css } from 'styled-components';

export type TextProps = {
  gradient?: string;
  size?: number;
};

const TextStyles = css`
  font-size: ${(props: TextProps) => props.size || 18}px;

  ${(props: TextProps) =>
    props.gradient &&
    css`
      background-image: ${(props: TextProps) => props.gradient};
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    `}
`;

export const Heading = styled.h1<TextProps>`
  ${TextStyles}
  font-size: ${(props: TextProps) => props.size || 48}px;
`;

export const Paragraph = styled.p<TextProps>`
  ${TextStyles}
`;
