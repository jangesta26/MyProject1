import homeImg from '../Pages/img/homeimg.png';
import { Banner } from './shared/Banner';

export const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-3xl mx-auto mt-28' id='/home'>
        <div className='gradientBG rounded-xl rounded-br-[90px] md:p-9 px-4 py-9'>
            <Banner homeImg={homeImg} heading={'Develop your skills without diligence'} 
            subheading={'a good example of a parangraph contains a topic sentence, details and a conclusion.There are many different kinds of animals that live in earth.'}
            btn1={'Get Started'} btn2={'Discount'} />        
        </div>
    </div>
  )
}

