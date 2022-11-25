import React from 'react';

const PtoSGradentBtn = ({ children }) => {
   return (
      <div>
         <button className='btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white my-4'>{children} </button>
      </div>
   );
};

export default PtoSGradentBtn;