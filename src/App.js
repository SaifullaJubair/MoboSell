import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './Routes/Routes/Routes';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import ScrollToTop from 'react-scroll-up';
import { BsArrowUpCircleFill } from 'react-icons/bs';


function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      <ScrollToTop showUnder={160} >
        <span className='text-4xl text-blue-600 hover:text-sky-600'><BsArrowUpCircleFill className='animate-bounce'></BsArrowUpCircleFill></span>
      </ScrollToTop>
    </div>
  );
}

export default App;
