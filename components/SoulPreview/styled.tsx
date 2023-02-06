import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  cursor: pointer;
  height: 106px;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid #33654a87;
  border-radius: 24px;
  box-shadow: #33654a26 0px 4px 12px 0px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const IconWrapper = styled.div`
  margin-right: 20px;
`;
