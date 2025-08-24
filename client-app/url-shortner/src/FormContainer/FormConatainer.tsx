import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../helpers/Constants';
import bg from "../assets/bg.jpg";



interface IFormContainerProps {
      updateReloadState?: () => void;

}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
   const {  updateReloadState} = props;
  const[fullUrl , setFullUrl] = React.useState<string>('');
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`,{
        fullUrl : fullUrl,
      });
      setFullUrl('');
      updateReloadState();
    } catch (error) {
      console.log
    }
  }
  return (
    <div className="container mx-auto p-2">
  <div className="my-8 rounded-xl bg-cover bg-center"
   style={{ backgroundImage: `url(${bg})` }}>
    <div className="w-full h-full rounded-xl p-4 sm:p-20 backdrop-brightness-50">
      <h2 className="text-white text-2xl sm:text-3xl font-bold text-center pb-4">
        URL Shortener
      </h2>
      <p className="text-white text-center pb-2 text-lg sm:text-xl font-extralight">
        Paste your untidy link to shorten it
      </p>
      <p className="text-white text-center pb-4 text-sm sm:text-base font-extralight">
        Free tool to shorten a URL and create neat, shareable links
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800 text-xs sm:text-sm">
              urlshortner.link /
            </div>
            <input
              type="text"
              placeholder="add your link"
              required
              className="block w-full p-3 sm:p-4 ps-28 sm:ps-32 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              value={fullUrl}
              onChange={(e) => setFullUrl(e.target.value)}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2 sm:p-2.5 text-xs sm:text-sm font-medium h-full bg-blue-700 text-white rounded-lg border border-blue-700 focus:ring-4 focus:outline-none"
            >
              Shorten Url
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default FormContainer;
