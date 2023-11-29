/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";


const Overlay = ({ img, bgTittle }) => {
  
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="Bg Img"
      strength={-300}
      className="mb-20"
    >
      <div className="hero h-[30rem]">
        <div className=" "></div>
        <div className="flex-col hero-content text-center text-black  h-[20rem] bg-[#bcb6b6] bg-opacity-50 py-20 w-full">
          <div className="max-w-xl ">
            <h1 className="mb-5 text-xl md:text-3xl font-bold uppercase w-full">
              {bgTittle}
            </h1>
            <h1 className="mb-5 text-[#000860] font-mono lg:text-5xl  text-4xl font-bold ">--- Our Success ---</h1>
            <p className="mb-5 text-[#000860] italic">
            “Happiness is the real sense of fulfilment that comes <br /> from hard work.” – Joseph Barbara
            </p>
          </div>
        </div>
      </div>
      {/* <div style={{ height: '50px' }} /> */}
    </Parallax>
  );
};

export default Overlay;