import React from 'react';
import { useParams } from 'react-router-dom';

function Users() {
  const params = useParams();
  const username = params.name;
  console.log(params, username);

  return (
    <div>
      Welcome it's {username}'s Page
    </div>
  );
}

export default Users;
