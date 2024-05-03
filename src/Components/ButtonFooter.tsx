import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export const ButtonFooter = () => {
  return (
    <footer>
        <div className="w-full bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-center gap-8">
            <Footer.Copyright href="#" by="DoeTech™" year={2024} className='flex items-center justify-center'/>
            <div className="mt-4 flex space-x-6 items-center justify-center sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} className='hover:text-[#2f55a4]'/>
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
        </div>
    </footer>
  )
}

