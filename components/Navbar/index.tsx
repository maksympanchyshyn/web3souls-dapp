import { Navbar, Button } from '@nextui-org/react';

const NavbarComponent = () => {
  return (
    <Navbar>
      <Navbar.Brand></Navbar.Brand>
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
