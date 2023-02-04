import Image from 'next/image';

import useBrowserWallet from '@/hooks/useBrowserWallet';
import { NavbarContainer, NavbarBrand, NavbarContent, NavbarItem } from './styled';
import { Button } from '../Button';

const NavbarComponent = () => {
  const { account, connect } = useBrowserWallet();
  return (
    <NavbarContainer>
      <NavbarBrand href="/">
        <Image src="/web3souls-logo.svg" alt="Web3 Souls Logo" width={154} height={40} priority />
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          {account ? (
            <Button>{`${account.slice(0, 6)}..${account.slice(-4)}`}</Button>
          ) : (
            <Button onClick={connect}>Connect wallet</Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default NavbarComponent;
