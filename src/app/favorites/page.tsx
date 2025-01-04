import { Suspense } from 'react';

const FavoritesPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Favorites Page</h1>
      </Suspense>
    </>
  );
};

export default FavoritesPage;
