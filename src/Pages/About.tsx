import imgFour from '../Pages/img/img4.png';
import imgFive from '../Pages/img/img5.png';
export const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='/about'>
       <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
            <img src={imgFour} alt="" />
          </div>
        {/* about content */}
        <div className='md:w-2/5'>
          <h2 className='md:text-5xl text-3xl font-bold text-gray-900 mb-5 leading-normal'>We have been improving our skils and intellegence <span className='text-textGreen'>for many years.</span></h2>
          <p className='text-gray-600 text-lg mb-7'>The largest breed of cat is the Ragdoll with males weighing in at 1 5 to 20 lbs. 
            The heaviest domestic cat on record was a neutered male tabby named Himmy from Queensland, Australia who weighed 46 lbs. 1 5 oz. 
          </p>
          <button className='btn-primary hover:-translate-y-4 transition-all duration-300'>Get Started</button>
        </div>
       </div>

       {/* 2nd part */}
       <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
          <div className='md:w-1/2'>
            <img src={imgFive} alt="" />
          </div>
        {/* about content */}
        <div className='md:w-2/5'>
          <h2 className='md:text-5xl text-3xl font-bold text-gray-900 mb-5 leading-normal'>We have been improving our skils and intellegence <span className='text-textGreen'>for many years.</span></h2>
          <p className='text-gray-600 text-lg mb-7'>The largest breed of cat is the Ragdoll with males weighing in at 1 5 to 20 lbs. 
            The heaviest domestic cat on record was a neutered male tabby named Himmy from Queensland, Australia who weighed 46 lbs. 1 5 oz. 
          </p>
          <button className='btn-primary hover:-translate-y-4 transition-all duration-300'>Get Started</button>
        </div>
       </div>
    </div>
  )
}

