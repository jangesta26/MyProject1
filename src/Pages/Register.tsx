import {Checkbox, Label, FloatingLabel } from 'flowbite-react';


export const Register = () => {
  return (
    <>
    <div className='mt-36 mb-20 md:ml-[35%]'>
      <div className='grid md:gap-12 md:px-14 lg:w-2/4 pt-5 bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl p-14'>
        <form className="flex max-w-md flex-col gap-5">
          <h2 className='text-3xl font-semibold pb-5'>Create Account</h2>
        <div>
          <FloatingLabel id='email' variant="outlined" label="Enter your email" />
        </div>
        <div>
          <FloatingLabel id='password2' type='password'variant="outlined" label="Enter your password" />
        </div>
        <div>
          <FloatingLabel id='repeat-password' type='password'variant="outlined" label="Enter your password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="md:w-3/4">
            I agree with the&nbsp;
            <a href="#something" className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </a>
          </Label>
        </div>
        <button className='btn-primary'>Register new account</button>
      </form>
      </div>
    </div>
    </>
  )
}

