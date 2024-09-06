import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TableSkeleton = () => {
  return (
    <div>
      <Skeleton height={40} width={`100%`} />
      <Skeleton count={5} height={50} style={{ marginTop: 10 }} />
    </div>
  );
};

export default TableSkeleton;
