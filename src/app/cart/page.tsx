import { Suspense } from 'react';

const CartPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Cart Page</h1>
      </Suspense>
    </>
  );
};

export default CartPage;
