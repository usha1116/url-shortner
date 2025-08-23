import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-white text-base text-center'>
      <div className='container p-2 mx-auto'>
      Copyright &copy; URL Shortener | Usha Teli | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
