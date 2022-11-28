import React from 'react';
import { Helmet } from 'react-helmet-async';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';

const Home = () => {
   return (
      <div>
         <Helmet><title>Home</title></Helmet>
         <Banner></Banner>
         <Categories></Categories>
         <Care></Care>


      </div>
   );
};

export default Home;