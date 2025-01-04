import { Product } from '@prisma/client';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { formatCurrency } from '@/lib/helpers';
import FavoriteToggleButton from './FavoriteToggleButton';

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <>
      <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products?.map((product) => (
          <article key={product.id} className='group relative'>
            <Link href={`products/${product.id}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-4'>
                  <div className='relative h-64 md:h-48 rounded overflow-hidden'>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      className='rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                      sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                    />
                  </div>
                  <div className='mt-4 text-center flex items-center justify-between'>
                    <h2 className='text-lg capitalize'>{product.name}</h2>
                    <p className='text-muted-foreground'>{formatCurrency(product.price)}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute top-6 right-6 z-50'>
              <FavoriteToggleButton productId={product.id} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;
