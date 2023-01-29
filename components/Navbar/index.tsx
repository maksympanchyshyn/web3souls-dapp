import Image from 'next/image';

import useBrowserWallet from '@/hooks/useBrowserWallet';
import { NavbarContainer, NavbarBrand } from './styled';

const NavbarComponent = () => {
  const { account, connect } = useBrowserWallet();
  return (
    <NavbarContainer>
      <NavbarBrand href="/">
        <Image src="/web3souls-logo.svg" alt="Web3 Souls Logo" width={154} height={40} priority />
      </NavbarBrand>
    </NavbarContainer>
  );
};

export default NavbarComponent;
