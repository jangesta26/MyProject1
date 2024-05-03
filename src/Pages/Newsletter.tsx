import  newsImg  from '../Pages/img/img7.png'
import { NewsBanner } from './shared/NewsBanner'

export const Newsletter = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-3xl mx-auto mt-28' id='/testimonial'>
        <div className='gradientBG2 rounded-xl rounded-bl-[90px] md:p-9 px-4 py-9'>
            <NewsBanner homeImg={newsImg} heading={'Develop your skills without diligence'} 
            subheading={'a good example of a parangraph contains a topic sentence, details and a conclusion.There are many different kinds of animals that live in earth.'}
            btn1={'I have a code'} btn2={'Click Here!'} />        
        </div>
    </div>
  )
}

