import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return (
    <div className='container mx-auto p-2'>
      <div className='bg-banner my-8 rounded-xl bg-cover'>
        <div>
        <h2 className='text text-3xl font-bold text-center pb-4'>URL Shortener</h2>
        <p className='text-white text-center pb-2 text-xl font-extralight'>past your untidy link to be shorten it</p>
        <p className='text-white text-center pb-4 text-sm font-extralight '>free tool to shorten a URL or reduce link , Use our Shortener to create a shortened & neat link making it easy to use</p>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
