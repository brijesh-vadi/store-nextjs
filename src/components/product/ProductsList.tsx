import { Product } from '@prisma/client';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';
import { formatCurrency } from '@/lib/helpers';

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <>
      <div className='grid gap-y-8 mt-12'>
        {products.map((product) => (
          <article key={product.id} className='group relative '>
            <Link href={`/products/${product.id}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500 hover:bg-secondary/30'>
                <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                  <div className='relative h-64 md:h-48 md:w-48'>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                      priority
                      className='w-full rounded-md object-cover'
                    />
                  </div>
                  <div>
                    <h2 className='text-xl font-semibold capitalize'>{product.name}</h2>
                    <h4 className='text-muted-foreground'>{product.company}</h4>
                  </div>
                  <p className='text-muted-foreground text-lg md:ml-auto'>{formatCurrency(product.price)}</p>
                </CardContent>
              </Card>
            </Link>
            <div className='absolute bottom-8 right-8 z-5'>
              <FavoriteToggleButton productId={product.id} />
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
