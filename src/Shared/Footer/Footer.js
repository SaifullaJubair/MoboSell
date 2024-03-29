import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <div data-theme="wireframe">
         <footer className="px-4 divide-y ">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
               <div className="lg:w-1/3">
                  <Link to="/" className="flex justify-center space-x-3 lg:justify-start">
                     <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                        <img src="https://i.ibb.co/1R5TbcM/image.png" alt="" />
                     </div>
                     <span className="self-center text-2xl font-semibold">MoboSell</span>
                  </Link>
               </div>
               <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                  <div className="space-y-3">
                     <h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Features</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Integrations</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Pricing</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">FAQ</a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-3">
                     <h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Privacy</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Terms of Service</a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-3">
                     <h3 className="uppercase dark:text-gray-50">Developers</h3>
                     <ul className="space-y-1">
                        <li>
                           <a rel="noopener noreferrer" href="#">Public API</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Documentation</a>
                        </li>
                        <li>
                           <a rel="noopener noreferrer" href="#">Guides</a>
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-3">
                     <div className="uppercase dark:text-gray-50">Social media</div>
                     <div className="flex justify-start space-x-3 text-2xl">
                        <a rel="noopener noreferrer" href="https://www.facebook.com/saifullajubair.saiful" title="Facebook" className="flex items-center p-1">
                           <FaFacebook></FaFacebook>
                        </a>
                        <a rel="noopener noreferrer" href="https://github.com/SaifullaJubair" title="GitHum" className="flex items-center p-1">
                           <FaGithub className=''></FaGithub>
                        </a>
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/saifulla-jubair/" title="LinkedIn" className="flex items-center p-1">
                           <FaLinkedin></FaLinkedin>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">© 1968 Company Co. All rights reserved.</div>
         </footer>
      </div>
   );
};

export default Footer;