import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (

    <div className="bg-slate-900">
      <div className="container mx-auto p-2">
        <nav className="flex justify-between items-center py-4">
          <div className="text-lg sm:text-xl font-semibold text-white">
            URL Shortener
          </div>
        </nav>
      </div>
    </div>


  );
};

export default Header;
