import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import TestCategories from '../TestCategories/TestCategories';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <TestCategories></TestCategories>
         <Care></Care>
      </div>
   );
};

export default Home;