
import brandLogo from '../Assets/brandlogo.png';





export const MyFooter = () => {
  return (
    <div className='w-full bg-[#1B8B00] md:px-14 p-4 mx-auto'>
        <div className='my-12'>
            <div className='md:w-1/2 space-y-8'>
                <a href="#something" className="text-2xl font-semibold flex items-center space-x-3">
                    <img src={brandLogo} alt="" className='w-10 inline-block items-center bg-black' /><span className='pt-1 text-white'>DoeTech</span> 
                </a>
                    <p className='md:w-2/3 text-white'>
                        A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.
                    </p>
                <div className='flex'>
                    <input type="email" name="email" id="email" placeholder="Your email" 
                    className='bg-slate-200 py-2 px-4 rounded-md focus:outline-none'/>
                    <button className='px-4 py-2 bg-[#7ee43b] rounded-md -ml-2 sm:-ml-2 cursor-pointer
                    hover:bg-amber-500 hover:text-gray-950 duration-300 transition-all'>Subcribe</button>
                </div>
            </div>
            {/* footer navigations */}

        </div>
    </div>
  )
}
