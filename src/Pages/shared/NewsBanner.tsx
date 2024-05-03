
export const NewsBanner = (props:any) => {
  return (
    <div className='rounded-xl md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
            {/* banner image */}
                <img src={props.homeImg} alt="" className='lg:h-72 shadow-3xl'/>
           
            {/* banner content */}
            <div className='md:w-3/5'>
                <h2 className=' md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{props.heading}</h2>
                <p className=' text-[#ebebeb] text-xl mb-8'>{props.subheading}</p>
                <div className='space-x-3 space-y-4'>
                    <button className='btn-primary hover:-translate-y-4 transition-all duration-300'>{props.btn1}</button>
                    <button className='btn-primary hover:-translate-y-4 transition-all duration-300'>{props.btn2}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

