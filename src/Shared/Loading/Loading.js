import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loading = () => {
   return (
      <div className='flex items-center min-h-screen justify-center'>
         <p className='flex items-center text-5xl font-bold'>L<ColorRing className="w-1/2"></ColorRing>admin</p>
      </div>
   );
};

export default Loading;