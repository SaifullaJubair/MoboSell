import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const User = () => {
   const { user } = useContext(AuthContext)
   return (
      <div>
         <p>name : {user.displayName}</p>
         <p>  name : {user.email}</p>
      </div>
   );
};

export default User;