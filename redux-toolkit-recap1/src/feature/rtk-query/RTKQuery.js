import React from 'react';
import { useGetAllPostQuery } from '../../service/demo';

function RTKQuery() {
  const allPost = useGetAllPostQuery();
  console.log("RTKQuery.js: allPost:", allPost);

  // const { data, isError, isLoading } = useGetAllPostQuery();

  return (
    <div>
      <h1 className="text-4xl">Welcome to RTK-Query</h1>
    </div>
  );
}

export default RTKQuery;
