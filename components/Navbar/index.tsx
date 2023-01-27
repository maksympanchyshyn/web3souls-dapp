import Image from 'next/image';
import { Navbar, Button } from '@nextui-org/react';

const NavbarComponent = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Image src="/web3souls-logo.svg" alt="Web3 Souls Logo" width={154} height={40} priority />
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Button color="gradient" auto>
            Connect Wallet
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavbarComponent;
