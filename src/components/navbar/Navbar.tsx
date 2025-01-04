import { Suspense } from 'react';
import Container from '../global/Container';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';

const Navbar = () => {
  return (
    <>
      <Suspense>
        <div className='border-b'>
          <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'>
            <Logo />
            <NavSearch />
            <div className='flex items-center gap-4'>
              <CartButton />
              <DarkMode />
              <LinksDropdown />
            </div>
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default Navbar;
