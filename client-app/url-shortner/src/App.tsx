import * as React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './Container/Container';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container/>
      <Footer/>
    </>
  );
};

export default App;
