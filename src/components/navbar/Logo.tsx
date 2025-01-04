import { VscCode } from 'react-icons/vsc';
import { Button } from '../ui/button';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <Button size='icon' asChild>
        <Link href='/'>
          <VscCode className='w-6 h-6 text-white dark:text-zinc-800' />
        </Link>
      </Button>
    </>
  );
};

export default Logo;
