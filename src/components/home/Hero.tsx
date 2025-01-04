import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
        <div>
          <h1 className='max-w-2xl font-medium text-3xl tracking-tight sm:text-5xl'>
            We are changing the way people shop.
          </h1>
          <p className='mt-8 max-w-xl text-lg text-muted-foreground leading-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dicta accusantium perspiciatis, quis porro
            rerum ipsa exercitationem quas! Laudantium magnam eos est minima numquam iste sunt quae nemo aperiam iure!
          </p>
          <Button asChild size='lg' className='mt-10'>
            <Link href='/products'>Our Products</Link>
          </Button>
        </div>
        <HeroCarousel />
      </section>
    </>
  );
};

export default Hero;
