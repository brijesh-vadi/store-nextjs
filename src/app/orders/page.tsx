import { Suspense } from 'react';

const OrdersPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Orders Page</h1>
      </Suspense>
    </>
  );
};

export default OrdersPage;
