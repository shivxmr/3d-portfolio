import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, CardTab } from "./components";

import InfiniteScrollAnimation from "./components/Infinite Scroll Animation/InfiniteScrollAnimation";
import Card from "./components/Card";
import MacOSDockSection from "./components/MacOSDock/MacOSDockSection";
// import Preloader from "./components/Preloader/Preloader";


const App = () => {

  // this is for the preloader

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  // function preloaderHandler() {
  //   if (isLoading) {
  //     return <Preloader />;
  //   }
  // }

  return (
    <>
      <BrowserRouter>
        {/* {preloaderHandler()} */}
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Works />
          {/* <Card /> */}
          {/* <Tech /> */}
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <StarsCanvas />
            <InfiniteScrollAnimation />
            <CardTab />
            <Contact />
            <MacOSDockSection />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
