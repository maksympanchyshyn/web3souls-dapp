import styled from 'styled-components';
import Link from 'next/link';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 76px;
  padding: 0 84px;
  border-bottom: 1px solid #eee;
`;

export const NavbarBrand = styled(Link)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarItem = styled.div`
  display: flex;
`;
