import imgOne from '../Pages/img/img1.png';
import imgTwo from '../Pages/img/img2.png';
import imgThree from '../Pages/img/img3.png';
export const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-3xl max-auto" id='/service'>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-2xl text-gray-950 font-bold lg:w-1/2 mb-3">Why we are betten than others</h3>
          <p className="text-base text-tartiary">Basically I know the React, but still I have started watching this series for my revision.</p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div className="lg:w-3/4">
                <img src={imgOne} alt=""  />
                <h5 className='text-2xl font-semibold text-gray-900 px-0 items-center
                mt-5'>Conventient study schedule</h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div  className="lg:w-3/4">
                <img src={imgTwo} alt=""/>
                <h5 className='text-2xl font-semibold text-gray-900 px-0 items-center
                mt-5'>Conventient study schedule</h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center
            flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div  className="lg:w-3/4">
                <img src={imgThree} alt="" />
                <h5 className='text-2xl font-semibold text-gray-900 px-0 items-center
                mt-5'>Conventient study schedule</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

