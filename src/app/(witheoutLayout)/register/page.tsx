import Register from '@/components/register/Register';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Register />
      </Suspense>
    </div>
  );
};

export default page;