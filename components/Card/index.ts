import styled, { css } from 'styled-components';

export type CardProps = {
  isPressable?: boolean;
};

export const Card = styled.div<CardProps>`
  width: 100%;

  ${(props: CardProps) =>
    props.isPressable &&
    css`
      cursor: pointer;
      transition: transform 0.5s cubic-bezier(0.39, 0.26, 0.28, 0.54);
      &:hover {
        transform: scale(1.1);
        transition: transform 0.5s cubic-bezier(0.39, 0.26, 0.28, 0.54);
      }
    `}
`;

export const CardBody = styled.div`
  border-radius: 32px;
  background: #16181a;
  display: flex;
  justify-content: center;
  padding: 12px;
`;
