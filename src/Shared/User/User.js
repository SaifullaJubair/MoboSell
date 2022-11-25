import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const User = () => {
   const { user } = useContext(AuthContext)
   return (
      <div>
         name: {user?.displayName}
         email: {user?.email}
      </div>
   );
};

export default User;