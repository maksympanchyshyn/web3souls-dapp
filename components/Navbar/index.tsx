import Image from 'next/image';
import { Navbar, Button } from '@nextui-org/react';

import useBrowserWallet from '@/hooks/useBrowserWallet';

const NavbarComponent = () => {
  const { account, connect } = useBrowserWallet();
  return (
    <Navbar>
      <Navbar.Brand>
        <Image src="/web3souls-logo.svg" alt="Web3 Souls Logo" width={154} height={40} priority />
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          {account ? (
            <Button color="gradient" auto ghost>
              {`${account.slice(0, 6)}..${account.slice(-4)}`}
            </Button>
          ) : (
            <Button color="gradient" auto onClick={connect}>
              Connect Wallet
            </Button>
          )}
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComponent;
