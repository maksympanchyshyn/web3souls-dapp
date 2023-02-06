import styled from 'styled-components';

export type ButtonProps = {
  rounded?: boolean;
};

export const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 12px;
  outline: none;
  border: none;
  border-radius: ${(props: ButtonProps) => (props.rounded ? 9999 : 12)}px;
  font-size: 16px;

  background-image: linear-gradient(90deg, #0065ff, #6942ef, #6554c0, #008cff, #0065ff, #6942ef);
  background-size: 400%;
  background-position: 0% 0%;
  transition: 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 26px;
    background-image: linear-gradient(90deg, #0065ff, #6942ef, #6554c0, #008cff, #0065ff, #6942ef);
    background-size: 500%;
    background-position: 0% 0%;
    filter: blur(10px);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.2s;
  }

  &:hover {
    animation: gradientRotate 2s infinite;
    &::before {
      opacity: 1;
      animation: gradientRotate 2s infinite;
    }
  }

  &:active {
    color: #c3c4d5;
  }

  &:focus {
    &::before {
      opacity: 1;
    }
  }
`;
