import { useState } from "react";
import { MdCircle } from "react-icons/md";


export const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {name: 'Start', monthlyPrice: 199.00, yearlyPrice:1299.00 , description: 'A common form of lorem ispum reads: Lorem ipsum dolor sir amet, consectetur adipiscing edlit.',
        greenCircle: <MdCircle className="text-[#44d83f] h-4 w-4"/>},
        {name: 'Advance', monthlyPrice: 599.00, yearlyPrice:1599.00 , description: 'A common form of lorem ispum reads: Lorem ipsum dolor sir amet, consectetur adipiscing edlit.',
        greenCircle: <MdCircle className="text-[#44d83f] h-4 w-4"/>},
        {name: 'Premium', monthlyPrice: 999.00, yearlyPrice:1999.00 , description: 'A common form of lorem ispum reads: Lorem ipsum dolor sir amet, consectetur adipiscing edlit.', 
        greenCircle: <MdCircle className="text-[#44d83f] h-4 w-4"/>},
    ]


  return (
    <div className='md:px-14 p-4 max-w-s max-auto py-10' id='/product'>
      <div className='text-center'>
        <h2 className="md:text-5xl text-3xl font-extrabold text-gray-900 mb-2">Here are all our plans</h2>
        <p className="text-gray-600 md:w-1/3 mx-auto px-4">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
        {/* toggle pricing */}
        <div className='mt-16'>
            <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                <span className="mr-8 text-2xl font-semibold">Monthly</span>
                <div className="w-14 h-6 bg-gray-400 rounded-full transition duration-200 ease-in-out">
                    <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-[#1B8B00] ml-8":"bg-gray-600 mr-8"}`}></div>
                </div>
                <span className="ml-8 text-2xl font-semibold">Yearly</span>
            </label>
            <input type="checkbox" id="toggle"  className="hidden" checked={isYearly} 
            onChange={() => setIsYearly(!isYearly)}/>
        </div>
      </div>

      {/* pricing cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {
            packages.map((pkg, index) => 
                <div className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                    <h3 className="text-3xl font-bold text-center text-gray-950">{pkg.name}</h3>      
                    <p className="text-gray-600 text-center my-5">{pkg.description}</p>   
                        <p className="mt-5 text-center text-[#1B8B00] text-4xl font-bold">
                        {isYearly ? `₱${pkg.yearlyPrice}`:`₱${pkg.monthlyPrice}`}
                        <span className="text-base text-gray-600 font-medium">/{isYearly ? `year`:`month`}</span>
                    </p>  
                    <ul className="mt-4 space-y-2 px-4">
                        <li className="flex gap-2 items-center text-sm text-gray-600">{pkg.greenCircle}Videos of Lessons</li>
                        <li className="flex gap-2 items-center text-sm text-gray-600">{pkg.greenCircle}Homework check</li>
                        <li className="flex gap-2 items-center text-sm text-gray-600">{pkg.greenCircle}Additional practical task</li>
                        <li className="flex gap-2 items-center text-sm text-gray-600">{pkg.greenCircle}Monthly conferences</li>
                        <li className="flex gap-2 items-center text-sm text-gray-600">{pkg.greenCircle}Personal advice from teachers</li>
                    </ul>
                    <div className="w-full mx-auto mt-8 flex items-center justify-center">
                        <button className="btn-primary2">Get Started</button>
                    </div>     
                </div>
            )
        }
      </div>
    </div>
  )
}

