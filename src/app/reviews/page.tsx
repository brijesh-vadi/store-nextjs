import { Suspense } from 'react';

const ReviewsPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Reviews Page</h1>
      </Suspense>
    </>
  );
};

export default ReviewsPage;
