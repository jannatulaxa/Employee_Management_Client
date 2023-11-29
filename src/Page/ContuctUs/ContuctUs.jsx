import React from 'react';
import HeadTittle from '../../Components/Shared/HeadTittle/HeadTittle';
import App from '../../Routes/xmpl';

const ContuctUs = () => {
    return (
        <div className="w-[90%] mx-auto my-10">
                  <HeadTittle heading={"You can contact withh us any time"} tittle={"Contact With Us"}></HeadTittle>

            <div className='border text-center my-10 p-6'>
            <div className='text-start '> 
                <p><span className='font-semibold text-white'>Address:</span> 120/7 collage road Gopalganj.</p>
                <p><span className='font-semibold text-white'>Mobail:</span> +988562254</p>
                <p><span className='font-semibold text-white'>Mobail:</span> +988566527</p>
            </div>
            <p className="mt-10 mb-4 text-[#e2e5ff]">-- You can share your opinions here --</p>
            <div>
                <p className="md:text-xl text-lg">
                Email: <input className='ml-2 border-b-2' type="mail"/> <br /> 
                Massage Area: <textarea className='ml-2 mt-2 border-b-2' type="text"/> 
                
                </p>

            </div>
            </div>
            <App/>
        </div>
    );
};

export default ContuctUs;