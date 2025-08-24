import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
   <div className="bg-slate-900 text-white text-xs sm:text-base">
  <div className="container mx-auto p-3 text-center">
    <p>
      Copyright &copy; 
      <span className="font-semibold"> URL Shortener</span> | 
      <span className="font-semibold"> Usha Teli</span> | All rights reserved.
    </p>
  </div>
</div>

  );
};

export default Footer;
