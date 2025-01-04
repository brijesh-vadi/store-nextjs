import { redirect } from 'next/navigation';
import prisma from './db';

export const fetchFeaturedProducts = async () => {
  return await prisma.product?.findMany({
    where: { featured: true },
  });
};

export const fetchProducts = async ({ search = '' }: { search: string }) => {
  const products = await prisma.product?.findMany({
    where: {
      OR: [{ name: { contains: search, mode: 'insensitive' } }, { company: { contains: search, mode: 'insensitive' } }],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return products;
};

export const fetchProductById = async (productId: string) => {
  const product = await prisma.product.findUnique({ where: { id: productId } });

  if (!product) {
    redirect('/products');
  }

  return product;
};
