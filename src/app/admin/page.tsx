import { Suspense } from 'react';

const AdminPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Admin Page</h1>
      </Suspense>
    </>
  );
};

export default AdminPage;
