import { createContext } from 'react';
import { Link } from 'react-scroll';
import { GrLanguage } from "react-icons/gr";
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import brandLogo from '../Assets/brandlogo.png';

import { FloatingLabel } from 'flowbite-react';


import { Checkbox, Label, Modal, TextInput, Select  } from 'flowbite-react';

export const Navbar = () => {

    const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsToggleMenuOpen(!isToggleMenuOpen);
    }

    const languageItems =[
        {value: "english", path: "English"},
        {value: "filipino", path: "Filipino"},
        {value: "korean", path: "Korean"},
        {value: "japanese", path: "Japanese"},
        {value: "chinese", path: "Chinese"},
        {value: "russian", path: "Russian"},
        {value: "french", path: "French"},
        {value: "greek", path: "Greek"},
    ];

    const navItems =[
        {link: "Home", path: "/home"},
        {link: "Service", path: "/service"},
        {link: "About", path: "/about"},
        {link: "Product", path: "/product"},
        {link: "Testimonial", path: "/testimonial"},
    ];


    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    // const [modalSize, setModalSize] = useState<string>('md');

    function onCloseModal() {
      setOpenModal(false);
      setEmail('');
    }

    return (
    <>
        <nav className='bg-white md:px-14 p-3 max-w-screen-3xl border-b mx-auto fixed top-0 right-0 left-0 shadow'>
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                <div id='dekstop-nav' className='flex space-x-14 items-center'>
                    <a href="/home" className="text-2xl font-semibold flex space-x-3">
                        <img src={brandLogo} alt="" className='w-10 inline-block items-center bg-black' /><span className='pt-1'>DoeTech</span>
                    </a>
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({link, path}) => <Link to = {path} key={path} spy={true} smooth={true} duration={500} offset={50} className="block text-base text-gray-700 hover:text-green-600">{link}</Link>)
                        }
                    </ul>
                </div> 
                <div className="space-x-0 hidden md:flex items-center">
                <GrLanguage />
                <Select className='w-36 py-0 px-3' defaultValue="English">
                    {
                        languageItems.map(({value, path})=> <option value={value}>{path}</option>)
                    }
                </Select>
                    <button className='btn-primary py-2 px-5 hover:bg-[#A2D241] text-sm hover:shadow-3xl' onClick={() => setOpenModal(true)}>Sign in</button>
                </div>
                   <nav id='mobile-toggle-nav'>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white text-xl focus:outline-none focus:text-gray-300'>
                        {
                            isToggleMenuOpen ? (<TfiClose className='h-6 w-6 text-gray-600'/>) : (<RxHamburgerMenu className='h-6 w-6 text-gray-600'/>)
                        }
                    </button>
                </div>
                    <div className={`space-y-2 -mt-[15px] px-4 pt-4 pb-6 gradientBG ${isToggleMenuOpen ? "block fixed top-20 right-0 left-0 rounded-br-xl rounded-bl-xl" :"hidden"}`}>
                        {
                        navItems.map(({link, path}) => <Link to = {path} smooth={true} duration={-100} className="block text-base text-gray-900 hover:text-white text-center border-b-[1px] border-gray-500">{link}</Link>) 
                        }
                        <button className='btn-primary py-2 px-5 hover:bg-[#A2D241] text-sm hover:shadow-3xl w-full' onClick={() => setOpenModal(true)}>Sign in</button>
                </div>
                </nav>
            </div>
        </nav>

        {/* Login Modal */}

        <Modal className='pt-20' show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
            <div>
              <FloatingLabel id='email' value={email} variant="outlined" label="Enter your email" />
            </div>

            <div>
              <FloatingLabel id='password' type='password'variant="outlined" label="Enter your password" />
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox className='text-[#1B8B00]' id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#something" className="text-sm text-[#1B8B00] hover:underline dark:text-[#A2D240]">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <button className='btn-primary py-2 px-4 hover:bg-[#A2D241]'>Log in to your account</button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="/register" className="text-[#1B8B00] hover:underline dark:text-[#A2D240]">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
};

