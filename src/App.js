import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './Routes/Routes/Routes';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import ScrollToTop from 'react-scroll-to-top';

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
