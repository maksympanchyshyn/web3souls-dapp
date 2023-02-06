import styled from 'styled-components';

export type ButtonProps = {
  rounded?: boolean;
};

export const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 12px;
  outline: none;
  border: none;
  background: linear-gradient(112deg, #06b7db -63.59%, #ff4ecd -20.3%, #0072f5 70.46%);
  border-radius: ${(props: ButtonProps) => (props.rounded ? 9999 : 12)}px;
  font-size: 16px;
  font-weight: 400;
`;
